import AtlasSdk from '@atlas/sdk';
import { routePaths } from '../routes/routePaths';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const updateAppPath = ({ path, search = '', state }) => {
  return history.push(path);
};

export const listenToAtlasPathChange = () => {
  AtlasSdk.navigation.onContainerPathChange((context) => {
    if (!context.path.startsWith(routePaths.root)) {
      updateAppPath({
        path: `${routePaths.root}${context.path}`,
        search: context.search,
      });
    } else {
      updateAppPath(context);
    }
  });
};

export const listenToUsersPathChange = () => {
  history.listen(({ location }) => {
    const { pathname, search } = location;

    AtlasSdk.navigation.triggerAppPathChange({
      path: pathname,
      search,
    });
  });
};
