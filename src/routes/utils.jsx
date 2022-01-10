import { lazy, Suspense } from "react";

export const load = (view) => {
  const Component = lazy(() => import(`../views/${view}`));

  return (
    <Suspense fallback={<></>}>
      <Component />
    </Suspense>
  );
};
