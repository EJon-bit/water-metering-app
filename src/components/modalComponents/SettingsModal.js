import React from 'react';

import {Table, Col, Row, Typography, Tag} from 'antd';

const data = [
    {
      key: '1',
      name: 'Mike'      
    },
    {
      key: '2',
      name: 'John',     
    },
];

const columns = [
    {
      
      dataIndex: 'settings',
      key: 'settings',
    }   
];
  

const SettingsModal=()=>{
    return(
        <Table columns={columns} dataSource={data} pagination={false}/>    
    )
}

export default SettingsModal;