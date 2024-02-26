import { useState, useEffect } from 'react';

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWidth() {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
}

function useBreakpoints(breakpoints) {
  let width = useCurrentWidth();
  let result = {};

  for (const key of Object.keys(breakpoints)) {
    result[key] =
      width >= breakpoints[key].min &&
      (!breakpoints[key].max || width <= breakpoints[key].max);
  }

  return result;
}

export { useCurrentWidth, useBreakpoints };
