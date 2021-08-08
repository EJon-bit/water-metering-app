import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoutes';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes=()=>{

    return(
        <Switch>
             <Route exact path="/login" component={Login}/>
            <ProtectedRoute exact path="/" component={Home}/>
        </Switch>
    )
}

export default Routes