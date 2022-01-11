import { routePaths } from "@/routes/routePaths";

const CHANNEL_TYPE = {
  email: "Email",
  chat: "Chat",
  sms: "Sms",
  facebook: "Facebook",
};

export const CHANNELS = [
  {
    name: CHANNEL_TYPE.email,
    path: routePaths.email,
  },
  {
    name: CHANNEL_TYPE.chat,
    path: routePaths.livechat,
  },
  {
    name: CHANNEL_TYPE.sms,
    path: routePaths.sms,
  },
  {
    name: CHANNEL_TYPE.facebook,
    path: routePaths.facebook,
  },
];
