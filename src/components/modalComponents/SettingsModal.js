import React, { useContext } from 'react';

import {Table, Col, Row, Typography, Tag, Switch} from 'antd';
import { ThemeContext } from '../../contexts/ThemeContext';
//import {} from '@ant-design/icons'



  

const SettingsModal=()=>{

  const {theme, setTheme} = useContext(ThemeContext);

  const data = [
    {
      key: '1',
      genSettings: 'Change Theme',
      settingsComponent:  <Switch
        unCheckedChildren={"Light"}
        checkedChildren={"Dark"}
        onChange={()=>theme==='dark'? setTheme('light'): setTheme('dark')}
        />   
    },
    {
      key: '2',
      genSettings: 'Other Settings', 
         
    },
  ];
  
  const columns = [
    {      
        dataIndex: 'genSettings',
        key: 'acc1',
    },    
    {      
        dataIndex: 'settingsComponent',
        key: 'setComp',
    }   
  ];


  return(
      <Table columns={columns} dataSource={data} pagination={false}/>    
  )
}

export default SettingsModal;