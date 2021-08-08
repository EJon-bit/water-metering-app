import React, { useState } from 'react';


import { Alert, Avatar, Card, Col, Icon, Input, Row, Switch, Badge, Typography, Tooltip, Button, Tag } from 'antd';
import { EllipsisOutlined, SyncOutlined, HistoryOutlined, CheckOutlined, CloseOutlined} from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import Form from 'antd/lib/form/Form';

import SvgAsset from '../components/Asset'
import SvgWaterDroplet from '../components/WaterDroplet';
import SvgWaterMeter from '../components/WaterMeter';



const { Meta } = Card;
const { Title } = Typography;

const Home=()=>{

    const [waterRate, setWaterRate] = useState("1258 GPM");
    const [switchLoading, setLoading]= useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalVisible, setModalVisible]= useState(false);
    const [footerContent, setFooterContent]= useState(null);

    const handleOk=()=>{
        setModalVisible(false)
    }


    const openModal=(type)=>{        
        var content = null; 
       
        if(type==="props"){ 
            setFooterContent(<Button onClick={()=>setModalVisible(false)}>Close</Button>);          
            content=
            <div>
                <Row justify="center" gutter={[30, 50]}>
                    <Col span={10}>
                        <Title level={5}>Actual Reading</Title><Tag color="blue">5456 GPM</Tag>
                    </Col>
                    <Col span={10}>                        
                        <Title level={5}>
                            Delta
                        </Title>
                        <Tag color="blue">8</Tag>
                    </Col>
                    <Col span={10}>
                        <Title level={5}>
                            Last Sync</Title> <Tag color="blue">dd/mm/yyyy</Tag>
                    </Col>
                </Row>
            </div>
        }
        else if(type==="sync"){
            setFooterContent(
                <Row gutter={20} justify="center">
                    <Col>
                        <Button onClick={()=>setModalVisible(false)}>Cancel</Button>
                    </Col>
                    <Col>
                        <Button onClick={"Syncing"}>Sync</Button>
                    </Col>
                </Row>
            );
            content= 
            <Form  name="Meter Synchronization" layout="vertical">
                <Form.Item label={<Row justify="center"><Title level={5}>Enter Meter Value</Title></Row>} name="meterVal">
                    <Input placeholder="e.g. 1456" />
                </Form.Item>
            </Form>
        }
        else{
            content=<></>
        }
        setModalContent(content);
        setModalVisible(true);
    }

    const renderCardTitle=()=>{
        return(
            <Row justify="center" align="middle" gutter={15}>
                 <Col>
                    <SvgWaterMeter id="waterMeterSvg"/>
                </Col> 
                <Col>
                    <Title id="meterCardHeader" level={3}>Operational Meters</Title>
                </Col>               
            </Row>
        )
    }

    const waterRateRender=()=>{
        const showRate=()=>{
            return(
                <Row>
                    <Col lg={20}>
                        <Row align="middle" gutter={40}>
                            <Col span={2}>
                                <SvgWaterDroplet id="waterDropIcon"/>
                            </Col>
                            <Col span={18}>
                                <Title id="waterReading" level={3}>{waterRate}</Title>
                            </Col>
                            <Col lg={4}>
                                <Tooltip color="blue" title="Turn Pipe On/Off" placement="bottom">
                                    <Switch loading={switchLoading} checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined/>}/>
                                </Tooltip>
                            </Col>
                        </Row>
                    </Col>                                 
                    <Col lg={4}>
                        <Row justify="end">  
                            <Badge id="statusBadge" status="success"  text="Running"/>                              
                        </Row>
                    </Col>
                </Row>
               
                
            )
        }
        return(
            <Row justify="center">
                <Col lg={18} xs={22}>
                    <Badge.Ribbon text="Status" color="cyan">
                        <Alert id="meterDisplay" message={showRate()} type="info"/>
                    </Badge.Ribbon>
                </Col>
            </Row>            
            
        )
    }

    return(
        <div id="homePage">
            <Row justify="center">
                <Col lg={20} md={24}>   
                        <Modal title="Additional Properties" visible={modalVisible} footer={footerContent}>
                            {modalContent}
                        </Modal>            
                        <Card id="waterRateCard"                      
                            actions={[
                                <Tooltip color="blue" title="Additional Properties" placement="bottom">
                                    <EllipsisOutlined id="propsIcon" key="setting" onClick={()=>openModal("props")}/>
                                </Tooltip>,
                                <Tooltip color="blue" title="Manual Sync" placement="bottom" onClick={()=>openModal("sync")}>
                                    <SyncOutlined id="syncIcon" key="edit"/>
                                </Tooltip>,
                                <Tooltip color="blue" title="Previous Readings" placement="bottom" onClick={()=>openModal("history")}>
                                    <HistoryOutlined id="historyIcon" key="ellipsis" onClick={()=>openModal()}/>
                                </Tooltip>                                
                            ]}>
                                <Meta
                                    title={renderCardTitle()}
                                    description={waterRateRender()}
                                />
                        </Card>                        
                </Col>     
            </Row>             
        </div>
    )
   
    
}

export default Home;