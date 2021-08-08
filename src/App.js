
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//css imports
//import 'antd/dist/antd.css';
import './App.less';


//custom component imports
import Routes from './router/Routes';

import AuthContextProvider from './contexts/AuthContext';

const App=()=>{
  return (
    <Router>
        <AuthContextProvider>       
          <Routes/>  
        </AuthContextProvider>  
    </Router>
  );
}

export default App;
