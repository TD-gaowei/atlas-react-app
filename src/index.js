import React from 'react';
import ReactDOM from 'react-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import AtlasSdk from '@atlas/sdk';

import HttpClient from './config/http.client';
import configI18n from './config/i18n';
import { history } from './config/routeController';
import TokenGenerator from './config/token.generator';
import App from './App';

async function start() {
  AtlasSdk.lifecycle.onLaunch(async () => {
    const { language } = await AtlasSdk.i18n.getConfig();
    const { changeLanguage } = await configI18n(language);
    AtlasSdk.i18n.onSwitchLanguage(changeLanguage);

    const { apiGatewayUrl } = await AtlasSdk.environment.getConfig();
    HttpClient.initialize(apiGatewayUrl);

    ReactDOM.render(
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>,
      document.getElementById('root')
    );
  });

  TokenGenerator.initialize(() => AtlasSdk.authorization.getAccessToken());

  await AtlasSdk.connect();
}

// eslint-disable-next-line no-console
start().catch(console.error);
