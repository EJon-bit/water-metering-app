import React from 'react';

import {Col, Input, Row, Typography, Tag, Form} from 'antd';

const { Title } = Typography;

const MeterSync=()=>{
    return(
        <Form  name="Meter Synchronization" layout="vertical">
            <Form.Item label={<Row justify="center"><Title level={5}>Enter Meter Value</Title></Row>} name="meterVal">
                <Input placeholder="e.g. 1456" />
            </Form.Item>
        </Form>    
    )
}

export default MeterSync;