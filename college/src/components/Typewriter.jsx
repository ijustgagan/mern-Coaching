import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // Reset the typing effect after a short pause
      const resetTimeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
      }, delay * 5); // Adjust this delay as needed to pause before restarting

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
