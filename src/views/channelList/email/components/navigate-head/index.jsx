import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import Flex from '@cobalt/react-flex';
import Icon from '@cobalt/react-icon';
import { Heading } from '@cobalt/react-typography';

import { routePaths } from '@/routes/routePaths';

export function NavigateHead() {
  const navigate = useNavigate();

  const handleClick = useCallback(
    () => navigate(routePaths.channels),
    [navigate]
  );

  return (
    <Flex paddingX={6} paddingY={6} alignY="center">
      <Icon name="arrow_back_ios" size="micro" onClick={handleClick} />
      <Flex paddingLeft={3}>
        <Heading level={1}>Email</Heading>
      </Flex>
    </Flex>
  );
}
