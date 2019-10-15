import React from 'react';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default class Layout extends React.PureComponent {
    render() {
        return <Container>{this.props.children}</Container>;
    }
}
