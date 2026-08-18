import React, { useState, useEffect } from 'react';

/**
 * TypewriterText — simulates typing and deleting multiple words.
 * Looks like a live code/text edit.
 */
const TypewriterText = ({ words = [], typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timer;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      // Typing
      if (currentText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="relative inline">
      {currentText}
      <span className="inline-block w-[2px] h-[0.85em] bg-white/70 align-middle ml-[2px] animate-pulse" style={{ verticalAlign: 'middle' }} />
    </span>
  );
};

export default TypewriterText;
