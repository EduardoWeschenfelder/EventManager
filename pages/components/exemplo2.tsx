import React, { useState, useEffect } from "react";

interface throttleProps {
  throttleInMs: number;
  exec: () => void;
}
export function useThrottleButton({ throttleInMs, exec }: throttleProps) {
  const [nextClickTime, setNextClick] = useState(0);
  const [enableToClick, setEnableToClick] = useState(true);

  if (enableToClick) {
    exec && (setEnableToClick(true), setNextClick(throttleInMs));
  }

  useEffect(() => {
    if (nextClickTime) {
      const handler = setTimeout(() => {
        setNextClick(0);
        setEnableToClick(true);
      }, throttleInMs);
      return () => clearTimeout(handler);
    }
  }, [nextClickTime]);
  console.log({ nextClickTime });
  console.log({ enableToClick });
  return <></>;
}
