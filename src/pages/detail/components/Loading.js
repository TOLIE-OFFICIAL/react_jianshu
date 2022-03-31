import React from "react";
import {Spin, Space} from 'antd';

const Loading = () => {
    return (
        <Space size="middle"
               style={{
                   display: 'block',
                   margin: '100px auto'
               }}
               delay='3000'
        >
            <Spin size="large"/>
        </Space>
    )
};

export default Loading;