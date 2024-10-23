'use client'
import { useEffect, useState } from 'react';

const useOverlay = (): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'o') {
        toggleOverlay();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [isOpen]);

  return [isOpen, toggleOverlay];
};

export default useOverlay;