import Flex from "@cobalt/react-flex";
import List, { Item } from "@cobalt/react-list";
import { routePaths } from "../../routes/routePaths";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import React from "react";

const channels = [
  {
    name: "Email",
    path: routePaths.email,
  },
  {
    name: "Chat",
    path: routePaths.livechat,
  },
  {
    name: "SMS",
    path: routePaths.sms,
  },
  {
    name: "Facebook",
    path: routePaths.facebook,
  },
];

const ChannelList = () => {
  return (
    <Flex direction="column">
      <Flex>
        <List>
          {channels.map((channel) => (
            <Item>
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
