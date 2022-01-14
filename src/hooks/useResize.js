import { useEffect, useState } from 'react';

export function useResize(element) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (!element) return;

    const obs = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (!entry) return;

      setWidth(entry.borderBoxSize[0].inlineSize);
      setHeight(entry.borderBoxSize[0].blockSize);
    });

    obs.observe(element);

    return () => {
      obs.disconnect();
    };
  }, [element]);

  return { width, height };
}
