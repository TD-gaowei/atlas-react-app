import { useMemo } from 'react';

export const useTabs = (id) => {
  const tabs = useMemo(
    () => [
      {
        name: 'Touchpoint',
        path: `/channels/email/touchpoints/${id}/touchpoint`,
      },
      {
        name: 'Auto-reply',
        path: `/channels/email/touchpoints/${id}/autoReply`,
      },
    ],
    [id]
  );

  const touchpointMap = useMemo(
    () => ({
      [`/channels/email/touchpoints/${id}/touchpoint`]: 'Touchpoint',
      [`/channels/email/touchpoints/${id}/autoReply`]: 'Auto-reply',
    }),
    [id]
  );

  return { tabs, touchpointMap };
};
