
import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './router/Routes';

const App=()=>{
  return (
     <div id="appContainer">
       <Router>
        <Routes/> 
      </Router>
     </div>
    
     
  );
}

export default App;
