import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';



//STEP 1:
//create components using React.lazy
const LightTheme = React.lazy(() => import('./lightTheme'));
const DarkTheme = React.lazy(() => import('./darkTheme'));

//STEP 2:
//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
    const {theme} = useContext(ThemeContext);

  return (
    <>
      <React.Suspense fallback={<></>}>
        {(theme === 'light') && <LightTheme />}
        {(theme === 'dark') && <DarkTheme />}
      </React.Suspense>
      {children}
    </>
  )
}

export default ThemeSelector