import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();
  
//A react component wrapping other components to enable the sharing of its functions and states via (useContext hook) 
const ThemeContextProvider=(props)=>{

    const [theme, setTheme]=useState('light')

    return(
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;