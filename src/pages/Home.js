import React, { createRef, useContext, useEffect, useState } from 'react';


import { Alert,  Card, Col, Row, Badge, Typography } from 'antd';



import SvgWaterDroplet from '../components/svgComponents/WaterDroplet';
import SvgWaterMeter from '../components/svgComponents/WaterMeter';


const { Title } = Typography;

const Home=()=>{

    const alertDescription=()=>{
        return( 
            <Col span={12} offset={3}>
                <Row>
                    <p id="meterId">Pipe Number - 4</p>
                </Row>
              
            </Col>
        
        );
    }

   
   

    const waterRateRender=()=>{
        const showRate=()=>{
            return(
                <Row>                                      
                    <Col lg={18}>
                        <Row align="middle" gutter={40}>
                            <Col span={2} offset={1}>
                                <SvgWaterDroplet id="waterDropIcon"/>
                            </Col>
                            <Col span={16}>
                                <Row>
                                    <Title id="waterReading" level={2}>{waterRate}</Title>
                                </Row>                               
                            </Col>
                          
                        </Row>
                    </Col>                                 
                    <Col lg={6}>
                        <Row justify="end">  
                            <Badge id="statusBadge" status="success"  text={<a id="statusText">Running</a>}/>                              
                        </Row>
                    </Col>
                </Row>
               
                
            )
        }
        return(
            <div id="alertCard">
                <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                    <Row justify="center">               
                        <Col lg={18} xs={22}>
                            <Badge.Ribbon text={<Row  id="ribbonText" justify="center">Status</Row>} color="blue">
                                <Alert id="meterDisplay" message={showRate()}  description={alertDescription()} type="info"/>
                            </Badge.Ribbon>
                        </Col>                          
                    </Row> 
                   
                </CustomScrollbars>
            </div>                
        )
    }

   

    return(
        <div id="componentContainer">                     
            <Row justify="center" gutter={[0, 40]}>
                <Col lg={20} md={24}>  
                            
                    {waterRateRender()}
                                                   
                </Col>   
                
            </Row>             
                        
        </div>
    )
   
    
}

export default Home;