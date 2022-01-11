import Tab from "@cobalt/react-tab";
import Flex from "@cobalt/react-flex";
import { Heading } from "@cobalt/react-typography";
import { useEffect, useState } from "react";
import { routePaths } from "../../routes/routePaths";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router";
import Divider from "@cobalt/react-divider";
import { features } from "../../features";

const tabs = [
  {
    name: "Channels list",
    path: routePaths.channels,
  },
  {
    name: "Templates",
    path: routePaths.templates,
  },
  {
    name: "Global Settings",
    path: routePaths.globalSettings,
    hidden: features.isActive("DCE_channels_global_settings"),
  },
].filter((tab) => !tab.hidden);

const tabMap = {
  [routePaths.channels]: "Channels list",
  [routePaths.templates]: "Templates",
  [routePaths.globalSettings]: "Global Settings",
};

const Home = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("");

  const handleSelectTab = (tab) => () => setSelectedTab(tab.name);

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
          <Flex alignX={1} paddingX={1}>
            <Tab
              key={tab.name}
              onClick={handleSelectTab(tab)}
              active={selectedTab === tab.name}
            >
              <Link to={tab.path}>{tab.name}</Link>
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
};

export default Home;
