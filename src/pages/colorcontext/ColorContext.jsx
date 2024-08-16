import React, { createContext, useState, useContext, useEffect } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(() => {
    const savedColor = localStorage.getItem('appliedColor');
    return savedColor || '#052e16';
  });

  useEffect(() => {
    localStorage.setItem('appliedColor', color);
  }, [color]);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
