import React from "react";
import Divider from "@cobalt/react-divider";
import { NavigateHead } from "../components/navigate-head";
import { FnTab } from "../components/tab";
import Button from "@cobalt/react-button";
import { useNavigate } from "react-router";
import { tabMap, tabs } from "../common";
import Flex from "@cobalt/react-flex";

const Touchpoints = () => {
  const navigate = useNavigate();

  return (
    <Flex direction="column">
      <NavigateHead />
      <FnTab tabs={tabs} tabMap={tabMap} />
      <Divider />
      this is email touchpoint component!
      <Button
        onClick={() => navigate("/channels/email/touchpoints/123/touchpoint")}
      >
        touchpoint
      </Button>
    </Flex>
  );
};

export default Touchpoints;
