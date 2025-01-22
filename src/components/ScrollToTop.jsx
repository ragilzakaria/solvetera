import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top of the page
  }, [location]);  // Dependency on location ensures it triggers on route change

  return null;
};

export default ScrollToTop;
