import React from 'react';

import {Col, Row, Typography, Tag, Card} from 'antd';

const { Title } = Typography;

const AdditionalProps=()=>{
    return(
        <div>
            <Row justify="center" gutter={[5, 5]}>
                <Col span={12}>
                    <Card id="waterPropsCard">
                        <Title level={5}>Actual Reading</Title><Tag color="blue">5456 GPM</Tag>
                    </Card>
                    
                </Col>
                <Col span={12}>   
                    <Card id="waterPropsCard">
                        <Title level={5}>
                            Delta
                        </Title>
                        <Tag color="blue">8</Tag>
                    </Card>                     
                    
                </Col>
                <Col span={12}>
                    <Card id="waterPropsCard">
                        <Title level={5}>
                            Last Sync
                        </Title> 
                        <Tag color="blue">dd/mm/yyyy</Tag>
                    </Card>                    
                </Col>
            </Row>
        </div>    
    )
}

export default AdditionalProps;