import React, { useState, useContext } from 'react';

import {Col, Row, Typography, Tag, Card, Alert, Table} from 'antd';
import { ModalContext } from '../../contexts/ModalContext';

const { Title } = Typography;



const AdditionalProps=()=>{
    const {accId} = useContext(ModalContext);

    const [detailTypes, setDetailTypes]=useState([
        {title:"Service Type", id:"serviceType", data:"unknown"}, 
        {title:"Account Holder", id:"accHolder", data:"unknown"}, 
        {title:"Outstanding Balance", id:"accBalance", data:"unknown"}])

    const renderDetails=()=>{        
    
        const alerts= detailTypes.map((detail, index, array)=>{
            return (
                <Col span={ index != array.length-1? 12:24}>
                    <Alert
                        message={<div><Title level={5}>{detail.title}</Title><p id="accountDetail">{detail.data}</p></div>}>
                    </Alert>                    
                </Col>                
            )
        })    
        return alerts    
    }

    const accountActions= [
        {
          key: '1',
          accActions: 'Stop Service'      
        },
        {
          key: '2',
          accActions: 'Report Problem',     
        },

    ];

    const actionsColumns= [
        {          
          dataIndex: 'accActions',
          key: 'actions',
        }   
    ];
    return(
        <div>
            <Col span={24}>
                <Row justify="center">{accId}</Row>
                <Row justify="center" gutter={[5, 5]}>
                    {renderDetails()}
                </Row>  
            </Col>
                            
            <Table columns={actionsColumns} dataSource={accountActions} pagination={false}/>
                        
                            
        </div>    
    )
}

export default AdditionalProps;