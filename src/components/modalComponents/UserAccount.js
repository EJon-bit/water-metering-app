import React from 'react';

import {Table, Col, Row, Typography, Tag} from 'antd';

const data = [
    {
        key: '1',
        accSettings: 'User Details',      
    },
    {
        key: '2',
        accSettings: 'Login as another User',          
    },
    {
        key: '3',
        accSettings: 'Logout',          
    },
];

const columns = [
    {      
        dataIndex: 'accSettings',
        key: 'acc1',
    }    
   
];
  

const UserAccount=()=>{
    return(
        <Table columns={columns} dataSource={data} pagination={false}/>    
    )
}

export default UserAccount;