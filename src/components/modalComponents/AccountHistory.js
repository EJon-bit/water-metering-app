import React, { useContext } from 'react';

import {Col, Row, Typography, Tag, Card, Alert, Table} from 'antd';
import { ModalContext } from '../../contexts/ModalContext';

const AccountHistory=()=>{

    const {accId} = useContext(ModalContext);

    const historyTypes= [
        {
          key: '1',
          historyType: 'Payment History'      
        },
        {
          key: '2',
          historyType: 'Usage History',     
        },
        {
            key: '3',
            historyType: 'Actions History',     
        }

    ];

    const columns= [
        {          
          dataIndex: 'historyType',
          key: 'actions',
        }   
    ];

    return(
        <div>      
            <Row justify="center">{accId}</Row>   
            <Table columns={columns} dataSource={historyTypes} pagination={false}/>                            
        </div>       
    )
}

export default AccountHistory;