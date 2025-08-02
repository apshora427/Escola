import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 2.5; 

      if (scrollPosition > triggerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);

    const startPosition = window.pageYOffset;
    const duration = 1500; 
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInQuart = progress < 0.3
        ? progress * 2 
        : 0.6 + (progress - 0.3) * 5.7; 

      const currentPosition = startPosition * (1 - easeInQuart);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (

    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          disabled={isScrolling}
          className={`
              fixed bottom-6 right-6 z-50
              w-14 h-14 
              bg-blue-500 hover:bg-blue-600 
              text-white 
              flex items-center justify-center
              shadow-lg
              transition-colors duration-200
              ${isScrolling ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
        >
          <motion.div
            animate={isScrolling ? {
              rotate: 360,
              transition: { duration: 0.8, ease: "linear" }
            } : {}}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="18,15 12,9 6,15"></polyline>
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton