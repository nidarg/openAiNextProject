'use client';

import React from 'react';
import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  forest: 'forest',
  fantasy: 'fantasy',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.forest);

  const themeToggle = () => {
    const newTheme = theme === themes.forest ? themes.fantasy : themes.forest;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      <button onClick={themeToggle} className='btn btn-accent btn-sm'>
        {theme === 'forest' ? (
          <BsSunFill className='h-4 w-4' />
        ) : (
          <BsMoonFill className='h-4 w-4' />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
