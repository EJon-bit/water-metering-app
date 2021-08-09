import React from 'react';

import {Col, Row, Typography, Tag} from 'antd';

const { Title } = Typography;

const AdditionalProps=()=>{
    return(
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
    )
}

export default AdditionalProps;