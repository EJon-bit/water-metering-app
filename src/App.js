
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//css imports
//import 'antd/dist/antd.css';
import './App.dark.less';


//custom component imports
import Routes from './router/Routes';

import AuthContextProvider from './contexts/AuthContext';
import ModalContextProvider from './contexts/ModalContext';

const App=()=>{
  return (
    <Router className="dark">
        <AuthContextProvider> 
          <ModalContextProvider>
            <Routes/> 
          </ModalContextProvider>       
        </AuthContextProvider>  
    </Router>
  );
}

export default App;
