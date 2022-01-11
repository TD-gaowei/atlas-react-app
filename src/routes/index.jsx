import { routePaths } from "./routePaths";
import { Navigate } from "react-router";
import { formatRoute, load } from "./utils";
import { features } from "@/features";

const routes = [
  {
    path: routePaths.root,
    element: load("home"),
    children: [
      {
        path: routePaths.root,
        element: <Navigate to={routePaths.channels} />,
      },
      {
        path: routePaths.channels,
        element: load("channelList"),
      },
      {
        path: routePaths.templates,
        element: load("templates"),
      },
      {
        path: routePaths.globalSettings,
        element: load("globalSettings"),
        hidden: features.isActive("DCE_channels_global_settings"),
      },
    ],
  },
  {
    path: routePaths.email,
    element: <Navigate to="/channels/email/touchpoints" />,
  },
  {
    path: "/channels/email/touchpoints",
    element: load("channelList/email/touchpoints"),
  },
  {
    path: "/channels/email/touchpoints/:id/touchpoint",
    element: load("channelList/email/touchpoints/touchpoint"),
  },
  {
    path: "/channels/email/touchpoints/:id/autoReply",
    element: load("channelList/email/touchpoints/auto-reply"),
  },
  {
    path: "/channels/email/settings",
    element: load("channelList/email/settings"),
  },
  {
    path: routePaths.emailItem,
    element: load("channelList/email/touchpoints/touchpoints-item"),
  },
  {
    path: routePaths.sms,
    element: load("channelList/sms"),
  },
  {
    path: routePaths.facebook,
    element: load("channelList/facebook"),
  },
  {
    path: routePaths.livechat,
    element: load("channelList/livechat"),
  },
  { path: "*", element: <>404 error page</> },
];

export default formatRoute(routes, { flag: "hidden" });
