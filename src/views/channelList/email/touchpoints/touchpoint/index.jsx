import Icon from "@cobalt/react-icon";
import { useNavigate, useParams } from "react-router";
import { routePaths } from "@/routes/routePaths";
import Flex from "@cobalt/react-flex";
import React from "react";
import { Heading, Text } from "@cobalt/react-typography";
import { FnTab } from "../../components/tab";
import Divider from "@cobalt/react-divider";
import { useTabs } from "../../hooks/useTabs";

const Touchpoint = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tabs: touchpointTabs, touchpointMap } = useTabs(id);

  return (
    <Flex direction="column">
      <Flex padding={6} alignY="center">
        <Icon
          name="arrow_back_ios"
          size="micro"
          onClick={() => {
            navigate(routePaths.email);
          }}
        />
        <Flex direction="column" paddingLeft={3}>
          <Heading level={1} style={{ marginBottom: 0 }} truncated>
            this is ChannelList component!
          </Heading>
          <Text>Email configuration</Text>
        </Flex>
      </Flex>
      <FnTab tabs={touchpointTabs} tabMap={touchpointMap} />
      <Divider />
      this is EmailItem component!
    </Flex>
  );
};

export default Touchpoint;
