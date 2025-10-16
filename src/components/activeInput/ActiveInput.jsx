import { useState, useRef } from 'react';

export const useCustomInputStyle = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setIsActive(true); // Active le style
    if (inputRef.current) {
      inputRef.current.style.borderBottom = '1px solid white';
      
      inputRef.current.style.transition = 'border 0.02s ease';
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false); // Désactive le style
    if (isActive && inputRef.current) {
      inputRef.current.style.border = 'none';
      inputRef.current.style.borderBottom = 'none';
    }
  };

  return {  inputRef, handleClick, handleMouseLeave };
};