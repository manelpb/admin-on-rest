import React from 'react';
import get from 'lodash/get';
import { FieldProps } from '../types';

export default class TextField extends React.PureComponent<FieldProps> {
    render() {
        const value = get(this.props.record, this.props.source);
        return value && typeof value !== 'string'
            ? JSON.stringify(value)
            : value;
    }
}
