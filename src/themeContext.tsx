// src/themeContext.tsx

import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#967969', //mocha
    button: '#7ca666', // sage green
    upButton: 'lightblue', // light blue
    toggle: '#7ca666', // sage green
    about: '#e8ded1', // black
    p: '#000000', // black
    section: '#d3d3d3', // light gray
    sectionHome: "#e8ded1", // beige
    sectionResume: '#D1C0A8', // medium brown
    sectionProjects: '#A0816C', //dark brown
    sectionPhotography: '#d9bfb6', //light pinkish brown
  },
  dark: {
    foreground: '#ffffff',
    background: 'darkgrey',
    button: '#7ca666', // sage green
    upButton: 'lightblue', // light blue
    toggle: '#7ca666', // sage green
    about: 'darkgrey', // black
    p: '#ffffff', // white
    section: 'rgb(35, 35, 35)', // black
    sectionHome: 'rgb(45, 45, 45)', 
    sectionResume: 'rgb(55, 55, 55)', 
    sectionProjects: 'rgb(65, 65, 65)', 
    sectionPhotography: 'rgb(75, 75, 75)'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});



//TODO: make <p> white on dark mode toggle