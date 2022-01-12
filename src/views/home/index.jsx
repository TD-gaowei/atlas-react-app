import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import Divider from '@cobalt/react-divider';
import Flex from '@cobalt/react-flex';
import Tab from '@cobalt/react-tab';
import { useTheme } from '@cobalt/react-theme-provider';
import { Heading } from '@cobalt/react-typography';

import { features } from '@/features';
import { routePaths } from '@/routes/routePaths';

const tabs = [
  {
    name: 'Channels list',
    path: routePaths.channels,
  },
  {
    name: 'Templates',
    path: routePaths.templates,
  },
  {
    name: 'Global Settings',
    path: routePaths.globalSettings,
    hidden: features.isActive('DCE_channels_global_settings'),
  },
].filter((tab) => !tab.hidden);

const tabMap = {
  [routePaths.channels]: 'Channels list',
  [routePaths.templates]: 'Templates',
  [routePaths.globalSettings]: 'Global Settings',
};

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const [selectedTab, setSelectedTab] = useState('');

  const handleSelectTab = (tab) => () => {
    navigate(tab.path);
    setSelectedTab(tab.name);
  };

  useEffect(() => {
    setSelectedTab(tabMap[location.pathname]);
  }, [location.pathname]);

  return (
    <>
      <Flex padding={6}>
        <Heading level={2}>Conversation</Heading>
      </Flex>
      <Flex paddingX={6}>
        {tabs.map((tab) => (
          <Flex alignX={1} paddingX={1} key={tab.name}>
            <Tab
              onClick={handleSelectTab(tab)}
              active={selectedTab === tab.name}
              style={{
                color: selectedTab === tab.name ? theme.primary600 : 'inherit',
              }}
            >
              {tab.name}
            </Tab>
          </Flex>
        ))}
      </Flex>
      <Divider />
      <Flex padding={6}>
        <Outlet />
      </Flex>
    </>
  );
}

export default Home;
