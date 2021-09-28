import React, { createRef, useContext, useEffect, useState } from 'react';


import { Grid, Alert, Col, Row, Badge, Tag, Typography } from 'antd';



import SvgWaterDroplet from '../components/svgComponents/WaterDroplet';
//import SvgWaterMeter from '../components/svgComponents/WaterMeter';

const { useBreakpoint } = Grid;
const { Title } = Typography;

const Home=()=>{
    const screens = useBreakpoint();
    const [breakPoint, setBreakPoint]= useState();
    const [waterRate, setWaterRate] = useState("1258 Gallons");
    const [rateFontSize, setFontSize]= useState(2);
    const [data,setData]=useState({
        last_updated:'unknown',
        "data": {
            value:{ pulse_counter: "Offline"}
        }
    });

    const alertDescription=()=>{
        return( 
            <Col span={14} offset={3}>
                <Row>
                    <Tag>{`Last Updated: ${data.last_updated}`}</Tag>                   
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
                                    <Title id="waterReading" level={rateFontSize}>{data.data.value.pulse_counter!=='Offline'? `${data.data.value.pulse_counter} Gallons`: `${data.data.value.pulse_counter}`}</Title>
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
                <Row justify="center">               
                    <Col lg={18} xs={24}>
                        <Badge.Ribbon text={<Row  id="ribbonText" justify="center">Status</Row>} color="blue">
                            <Alert id="meterDisplay" message={showRate()}  description={alertDescription()} type="info"/>
                        </Badge.Ribbon>
                    </Col>                          
                </Row>                    
            </div>                
        )
    }

    const getData=()=>{
        fetch('./appData/sampleData.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(function(response){
            //console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson);
        });
    }

    useEffect(()=>{
        const breakpoints= Object.entries(screens).filter(screen=> screen[1])
        const point= Object.keys(Object.fromEntries(breakpoints))[breakpoints.length-1]
        setBreakPoint(point);

        if(point==="xs" || point==="sm" || point==="md"){
            setFontSize(4);
        }
        else{
            setFontSize(2);
        }

        getData();

        setInterval(() => {
            getData();
        }, 60000);
    },[screens])

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