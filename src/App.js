import React from 'react';
import { useRoutes } from 'react-router';
import AtlasSdk from '@atlas/sdk';

import CobaltRoot from '@cobalt/cobalt-react-components';
import ThemeProvider from '@cobalt/react-theme-provider';
import ViewportProvider from '@cobalt/react-viewport-provider';

import {
  listenToAtlasPathChange,
  listenToUsersPathChange,
} from './config/routeController';
import routes from './routes';

listenToAtlasPathChange();
listenToUsersPathChange();

export default function App() {
  const Component = useRoutes(routes);

  return (
    <ViewportProvider>
      <CobaltRoot>
        <ThemeProvider loader={() => AtlasSdk.theme.getConfig()}>
          {Component}
        </ThemeProvider>
      </CobaltRoot>
    </ViewportProvider>
  );
}
