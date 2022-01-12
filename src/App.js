import React from 'react';
import AtlasSdk from '@atlas/sdk';
import CobaltRoot from '@cobalt/cobalt-react-components';
import ThemeProvider from '@cobalt/react-theme-provider';
import { useRoutes } from 'react-router';
import ViewportProvider from '@cobalt/react-viewport-provider';
import routes from './routes';

import {
  listenToAtlasPathChange,
  listenToUsersPathChange,
} from './config/routeController';

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
