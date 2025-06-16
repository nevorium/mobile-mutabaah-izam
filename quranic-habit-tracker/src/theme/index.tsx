// src/theme/index.tsx
import React, { createContext, useContext } from 'react';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

const ThemeContext = createContext({ colors, typography, spacing, dark: false });

export const ThemeProvider = ({ children, dark = false }) => (
  <ThemeContext.Provider value={{ colors, typography, spacing, dark }}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
