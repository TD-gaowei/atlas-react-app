import React from 'react';
import { useNavigate } from 'react-router';

import Button from '@cobalt/react-button';
import Divider from '@cobalt/react-divider';
import Flex from '@cobalt/react-flex';

import { tabMap, tabs } from '../common';
import { NavigateHead } from '../components/navigate-head';
import { FnTab } from '../components/tab';

function Touchpoints() {
  const navigate = useNavigate();

  return (
    <Flex direction="column">
      <NavigateHead />
      <FnTab tabs={tabs} tabMap={tabMap} />
      <Divider />
      this is email touchpoint component!
      <Button
        size="small"
        onClick={() => navigate('/channels/email/touchpoints/123/touchpoint')}
      >
        touchpoint
      </Button>
    </Flex>
  );
}

export default Touchpoints;
