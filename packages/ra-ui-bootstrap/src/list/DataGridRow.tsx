import React from 'react';
import { FieldProps } from '../types';
import DataGridCel from './DataGridCell';

export default class DataGridRow extends React.PureComponent<Props> {
    render() {
        const { id, children, record, basePath, resource } = this.props;

        return (
            <tr>
                {React.Children.map(
                    children,
                    (field: React.ReactElement<FieldProps>, index) =>
                        React.isValidElement(field) ? (
                            <DataGridCel
                                key={`${id}-${field.props.source || index}`}
                                record={record}
                                {...{ field, basePath, resource }}
                            />
                        ) : null
                )}
            </tr>
        );
    }
}

interface Props {
    id: string;
    basePath?: string;
    classes?: object;
    hover?: boolean;
    onToggleItem?: () => void;
    resource?: string;
    row?: React.ReactNode;
    rowClick?: string | (() => void);
    record: object;
}
