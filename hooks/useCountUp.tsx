import { useState, useEffect } from "react";

export const useCountUp = (start: boolean, end: number, duration = 2000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); 
      setValue(Math.floor(end * eased));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [start, end, duration]);

  return value;
};
