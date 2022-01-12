import React from 'react';

import Divider from '@cobalt/react-divider';
import Flex from '@cobalt/react-flex';

import { tabMap, tabs } from '../common';
import { NavigateHead } from '../components/navigate-head';
import { FnTab } from '../components/tab';

function Settings() {
  return (
    <Flex direction="column">
      <NavigateHead />
      <FnTab tabs={tabs} tabMap={tabMap} />
      <Divider />
      this is email settings component!
    </Flex>
  );
}

export default Settings;
