// src/themeContext.tsx

import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#967969', //mocha
    button: '#7ca666', // sage green
    upButton: 'lightblue', // light blue
    toggle: '#7ca666', // sage green
    p: '#000000', // black
    section: '#d3d3d3', // light gray
    sectionHome: "#e8ded1", // beige
    sectionResume: '#D1C0A8', // medium brown
    sectionProjects: '#A0816C', //dark brown
    sectionPhotography: '#d9bfb6', //light pinkish brown
  },
  dark: {
    foreground: '#ffffff',
    background: 'black',
    button: '#7ca666', // sage green
    upButton: 'lightblue', // light blue
    toggle: '#7ca666', // sage green
    p: '#ffffff', // white
    section: 'black', // black
    sectionHome: 'black', 
    sectionResume: 'black', 
    sectionProjects: 'black', 
    sectionPhotography: 'black', 
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});



//TODO: make <p> white on dark mode toggle