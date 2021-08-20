import React, {useContext} from 'react';
import { Route, Redirect, Link, useLocation, useHistory } from 'react-router-dom';

import { Card, Col, Layout, Menu, Row, Badge, Tooltip, Modal } from 'antd';
import { AuthContext } from '../contexts/AuthContext';

import SvgNotificationBell from '../components/svgComponents/NotificationBell';
import SvgAccMgmt from '../components/svgComponents/AccMgmt';
import SvgSettings from '../components/svgComponents/Settings';
import CustomScrollbars from '../components/CustomScrollbars';
import { ModalContext } from '../contexts/ModalContext';

const {Content}= Layout;



const ProtectedRoute=({ component: Component, ...routeProps})=>{

    const {authenticated}= useContext(AuthContext);
    const {openModal, modalContent, footerContent, modalTitle, modalVisible} = useContext(ModalContext);

    return(
        <Route {...routeProps} render={(props)=>{
            if(authenticated){

                return(
                    <Layout id='appContainer'>                                      
                        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                            <Content id='componentContainer'>                                                              
                                <Component {...routeProps}/>                                                      
                            </Content> 
                        </CustomScrollbars> 
                        <Row justify="center">
                            <Card  id="menuCard">                                 
                                    <Card.Grid hoverable={true}>
                                        <Tooltip color="blue" title="Notifications" placement="top">
                                            <SvgNotificationBell id="menuIcon" onClick={()=>openModal(null)}/>
                                        </Tooltip>
                                    </Card.Grid>   
                                    <Card.Grid hoverable={true}>
                                        <Tooltip color="blue" title="Account Management" placement="top">
                                            <SvgAccMgmt id="menuIcon"/> 
                                        </Tooltip> 
                                    </Card.Grid>                                 
                                    <Card.Grid hoverable={true}>
                                        <Tooltip color="blue" title="App Configurations" placement="top">
                                            <SvgSettings id="menuIcon"/>
                                        </Tooltip>
                                    </Card.Grid>                                                                                                      
                            </Card>
                        </Row>                      
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