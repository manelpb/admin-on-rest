import React from 'react';
import { FieldProps } from '../types';

export default class DataGridCel extends React.PureComponent<Props> {
    render() {
        const { field, record, resource, basePath } = this.props;

        return (
            <td>
                {React.cloneElement(field, {
                    record,
                    basePath: field.props.basePath || basePath,
                    resource,
                })}
            </td>
        );
    }
}

interface Props {
    field: React.ReactElement<FieldProps>;
    record: object;
    basePath: string;
    resource: string;
}
