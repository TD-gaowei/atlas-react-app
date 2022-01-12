import React from 'react';
import { useNavigate, useParams } from 'react-router';

import Divider from '@cobalt/react-divider';
import Flex from '@cobalt/react-flex';
import Icon from '@cobalt/react-icon';
import { Heading, Text } from '@cobalt/react-typography';

import { FnTab } from '../../components/tab';
import { useTabs } from '../../hooks/useTabs';

import { routePaths } from '@/routes/routePaths';

function AutoReply() {
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
          <Heading level={1} style={{ marginBottom: 0 }}>
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
}

export default AutoReply;
