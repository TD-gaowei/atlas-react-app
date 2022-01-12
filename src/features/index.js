const DEFAULT_FEATURES = {
  DCE_channels_email: 'off',
  DCE_channels_livechat: 'off',
  DCE_channels_facebook: 'off',
  DCE_channels_sms: 'off',
  DCE_channels_template: 'off',
  DCE_channels_global_settings: 'off',
  DCE_channels_email_studio_flow_enable: 'off',
  DCE_channels_livechat_touchpoint_listing: 'off',
  DCE_channels_sms_routing_configuration: 'off',
};

const isActive = (key) => DEFAULT_FEATURES[key] === 'off';

export const features = {
  isActive,
};
