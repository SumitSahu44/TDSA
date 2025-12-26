import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Top पर scroll
  }, [pathname]); // Path change पर trigger

  return null; // Ye component kuch render नहीं करता, sirf effect handle करता है
};

export default ScrollToTop;