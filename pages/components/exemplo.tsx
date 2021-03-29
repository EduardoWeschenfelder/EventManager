import React, { useState, useEffect } from "react";

interface throttleProps {
  exec: () => void;
}

export async function useThrottleButton({ exec }: throttleProps) {
  const [nextClickTime, setNextClick] = useState(0);
  const [enableToClick, setEnableToClick] = useState(true);
  console.log({ nextClickTime });
  console.log({ enableToClick });

  useEffect(() => {
    if (enableToClick) {
      exec && setEnableToClick(false);
    }
  }, [enableToClick]);

  useEffect(() => {
    if (nextClickTime) {
      const handler = setTimeout(() => {
        setNextClick(0);
        setEnableToClick(true);
      }, nextClickTime);
      return () => clearTimeout(handler);
    }
  }, [nextClickTime]);

  return { setNextClick };
}
