import { useEffect, useState } from "react";

export const useScrollData = () => {
  const [scrollDirection, setScrollDirection] = useState(true);
  const [lastY, setLastY] = useState(0);

  const scrollListener = () => {
    if (window.scrollY > lastY) {
      setScrollDirection(false);
    } else {
      setScrollDirection(true);
    }

    setLastY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return {
    scrollDirection,
  };
};
