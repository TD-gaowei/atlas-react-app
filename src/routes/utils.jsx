import { lazy, Suspense } from 'react';

export const load = (view) => {
  const Component = lazy(() => import(`../views/${view}`));

  return (
    <Suspense fallback={<>loading...</>}>
      <Component />
    </Suspense>
  );
};

export function formatRoute(routes, { flag }) {
  return routes.reduce((acc, cur) => {
    if (Array.isArray(cur.children)) {
      acc.push({
        ...cur,
        children: formatRoute(cur.children, { flag }),
      });
    } else if (!cur[flag]) {
      acc.push(cur);
    }

    return acc;
  }, []);
}
