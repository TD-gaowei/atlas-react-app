import React from "react";
import { NavigateHead } from "../components/navigate-head";
import { FnTab } from "../components/tab";
import { tabMap, tabs } from "../common";
import Flex from "@cobalt/react-flex";
import Divider from "@cobalt/react-divider";

const Settings = () => {
  return (
    <Flex direction="column">
      <NavigateHead />
      <FnTab tabs={tabs} tabMap={tabMap} />
      <Divider />
      this is email settings component!
    </Flex>
  );
};

export default Settings;
