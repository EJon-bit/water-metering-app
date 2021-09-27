
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//css imports
//import 'antd/dist/antd.css';




//custom component imports
import Routes from './router/Routes';

import AuthContextProvider from './contexts/AuthContext';
import ModalContextProvider from './contexts/ModalContext';
//import { ThemeContext } from './contexts/ThemeContext';
import ThemeSelector from './themes/ThemeSelector';


const App=()=>{

  

  return (
      <ThemeSelector>
        <Router>     
          <AuthContextProvider> 
            <ModalContextProvider>
              <Routes/> 
            </ModalContextProvider>       
          </AuthContextProvider>          
        </Router>
      </ThemeSelector>    
  );
}

export default App;
