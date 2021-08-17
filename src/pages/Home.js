import React, { createRef, useEffect, useState } from 'react';


import { Alert, Avatar, Card, Col, Icon, Input, Row, Switch, Badge, Typography, Tooltip, Button, Tag, Checkbox, Select } from 'antd';
import { EllipsisOutlined, SyncOutlined, HistoryOutlined, CheckOutlined, CloseOutlined, PlusOutlined} from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import Form from 'antd/lib/form/Form';

import SvgAsset from '../components/svgComponents/Asset'
import SvgWaterDroplet from '../components/svgComponents/WaterDroplet';
import SvgWaterMeter from '../components/svgComponents/WaterMeter';
import SvgGenerateBill from '../components/svgComponents/GenerateBill';
import SvgLocation from '../components/svgComponents/Location';
import AdditionalProps from '../components/modalComponents/AdditionalProps';
import MeterSync from '../components/modalComponents/MeterSyncForm';

import useWindowDimensions from '../customHooks/useWindowHook';
import useRefDimensions from '../customHooks/useRefDimensions';

import CustomScrollbars from '../components/CustomScrollbars';


 
const { Meta } = Card;
const { Title } = Typography;

const Home=()=>{

    const [waterRate, setWaterRate] = useState("1258 GPM");
    const [switchLoading, setLoading]= useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalVisible, setModalVisible]= useState(false);
    const [footerContent, setFooterContent]= useState(null);
    const [modalTitle, setModalTitle]= useState(null);
    const [renderModalContent, setRenderContent]= useState(false);

    const [form] = Form.useForm();
      
    const options = [
        { label: 'Attachments'}, 
        { label: 'Other Unique Properties', value: 'lime' }, 
        { label: 'File Transfers (SFTP)', value: 'green' }, 
        { label: 'Script Execution (SSH)', value: 'cyan' }
    ];

    const accSeletionProcess=(values, options)=>{      
        options.forEach(option=>{if(values.includes(option.value)){
            console.log(option.value)        
            setRenderContent(true);
        }})
    }

    const formProps= 
    {
        name:"meterForm",
        form: form,       
        layout:"vertical",
        requiredMark:false
    }

    const alertDescription=()=>{
        return( 
            <Col span={12} offset={3}>
                <Row>
                    <p id="meterId">Pipe Number - 4</p>
                </Row>
                <Row span={24}>
                    <Col span={9}>
                        <Row align="middle" gutter={5}>
                            <Col>
                                <SvgGenerateBill id="billSvg"/>
                            </Col>
                            <Col>
                                <Tag><a>Generate Bill</a></Tag>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={9}>
                        <Row align="middle" gutter={5}>
                            <Col>
                                <SvgLocation id="locationSvg"/>
                            </Col>
                            <Col>
                                <Tag><a>See Location</a></Tag>
                            </Col>
                        </Row>                        
                    </Col>
                </Row>
            </Col>
        
        );
    }

    const handleOk=()=>{
        setModalVisible(false)
    }

    const openModal=(type)=>{        
        var content =  
        <Form {...formProps}>
            <Form.Item 
            name='meterId' 
            label={<Row justify="center"><Title level={5}> Meter Selection</Title></Row>}>
                <Select
                    mode="multiple"
                    showArrow                                                  
                    style={{ width: '100%' }}
                    placeholder='Select a Meter from Dropdown'
                    optionFilterProp="label"
                    options={options}
                    onChange={(values, options)=>{ accSeletionProcess(values, options)}}
                />
            </Form.Item>
        </Form> ; 
       
        if(renderModalContent){
            if(type==="props"){ 
                const titleModal= <Row justify="center"> <Title level={4}>Additional Properties</Title></Row>
                setModalTitle(titleModal);
                setFooterContent(<Button onClick={()=>setModalVisible(false)}>Close</Button>);  
                content = <AdditionalProps/>    
                
                setModalContent(content);
            }
            else if(type==="sync"){
                const titleModal= <Row justify="center">Manual Sync</Row>
                setModalTitle(titleModal);
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
                content= <MeterSync/>
               
            }
            else if(type==="addMeter"){
                const titleModal= <Row justify="center">Add A Meter</Row>
                setModalTitle(titleModal);
                setFooterContent(
                    <Row gutter={20} justify="center">
                        <Col>
                            <Button onClick={()=>setModalVisible(false)}>Cancel</Button>
                        </Col>
                        <Col>
                            <Button onClick={"Syncing"}>Add</Button>
                        </Col>
                    </Row>
                );
                content=<></>
            }
            else{
                const titleModal= <Row justify="center">Meter History</Row>
                setModalTitle(titleModal);
                setFooterContent(<Button onClick={()=>setModalVisible(false)}>Close</Button>);  
                content=<></>
            }
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
                            <Col lg={4}>
                                <Tooltip color="blue" title="Turn Pipe On/Off" placement="bottom">
                                    <Switch loading={switchLoading} checkedChildren={<CheckOutlined id="switchCheckIcon"/>} unCheckedChildren={<CloseOutlined id="switchCloseIcon"/>}/>
                                </Tooltip>
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
                            <Badge.Ribbon text={<Row  id="ribbonText" justify="center">Status</Row>} color="cyan">
                                <Alert id="meterDisplay" message={showRate()}  description={alertDescription()} type="info"/>
                            </Badge.Ribbon>
                        </Col>                          
                    </Row> 
                   
                </CustomScrollbars>
            </div>                
        )
    }

   

    return(
        <div id="homePage"> 
            <Modal title={modalTitle} visible={modalVisible} footer={footerContent}>
                {modalContent}
            </Modal>            
            <Row justify="center" gutter={[0, 40]}>
                <Col lg={20} md={24}>                                    
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
                                </Tooltip>,
                                <Tooltip color="blue" title="Add a Meter" placement="bottom" onClick={()=>openModal("addMeter")}>
                                    <PlusOutlined id="plusIcon"></PlusOutlined>
                                </Tooltip>                                
                            ]}
                            >
                                <Meta
                                    title={renderCardTitle()}
                                    description={waterRateRender()}
                                />
                        </Card>                        
                </Col>   
                <Col lg={20} md={24}>                                    
                        <Card id="otherCard"  style={{height:'550px'}} >                                             
                           fhj
                        </Card>                        
                </Col>     
            </Row>             
                        
        </div>
    )
   
    
}

export default Home;