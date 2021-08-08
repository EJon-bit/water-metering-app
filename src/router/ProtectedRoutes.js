import React, {useContext} from 'react';
import { Route, Redirect, Link, useLocation, useHistory } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { AuthContext } from '../contexts/AuthContext';
const {Content}= Layout;

const ProtectedRoute=({ component: Component, ...routeProps})=>{

    const {authenticated}= useContext(AuthContext);

    return(
        <Route {...routeProps} render={(props)=>{
            if(authenticated){

                return(
                    <Layout id='appContainer'>                  
              
                        <Content id='componentContainer'>                                                              
                            <Component {...routeProps}/> 
                        </Content> 
                      
                    </Layout> 
                )
            }
            else{
                return( <Redirect to={{ pathname: "/login", state:{ from: props.location } }}/>  )
                
            } 
        }}/>
    )

}

export default ProtectedRoute