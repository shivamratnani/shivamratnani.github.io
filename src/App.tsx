// src/App.tsx

import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import { ThemeContext, themes } from './themeContext';
import ReactGA from 'react-ga';

const App: React.FC = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" style={{ backgroundColor: theme.background, color: theme.foreground }}>
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
