import React, { useEffect, useState } from 'react';

const ScrollToTopButton = ({ mainContentRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (mainContentRef.current) {
        if (mainContentRef.current.scrollTop > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    if (mainContentRef.current) {
      mainContentRef.current.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (mainContentRef.current) {
        mainContentRef?.current.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, [mainContentRef]);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
          ⬆️
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'opacity 0.3s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px', // Increase font size
  },
};

export default ScrollToTopButton;
