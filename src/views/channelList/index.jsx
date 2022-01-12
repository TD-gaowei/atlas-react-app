import Flex from '@cobalt/react-flex';
import List, { Item } from '@cobalt/react-list';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import React from 'react';
import { CHANNELS } from '@/constants';

const ChannelList = () => {
  return (
    <Flex direction="column">
      <Flex>
        <List>
          {CHANNELS.map((channel) => (
            <Item key={channel.path}>
              <Link to={channel.path}>{channel.name}</Link>
            </Item>
          ))}
        </List>
      </Flex>

      <Flex>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default ChannelList;
