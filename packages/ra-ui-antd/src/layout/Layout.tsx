import React from 'react';
import ADLayout from 'antd/es/layout';

import 'antd/dist/antd.css';

const { Content } = ADLayout;

export default class Layout extends React.PureComponent {
    render() {
        return (
            <ADLayout>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    {this.props.children}
                </Content>
            </ADLayout>
        );
    }
}
