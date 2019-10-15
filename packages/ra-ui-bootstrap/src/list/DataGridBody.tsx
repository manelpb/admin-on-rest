import React from 'react';
import DataGridRow from './DataGridRow';

export default class DataGridBody extends React.PureComponent<Props> {
    render() {
        const {
            ids,
            basePath,
            classes,
            hover,
            onToggleItem,
            data,
            resource,
            rowClick,
            selectedIds,
            children,
        } = this.props;

        return (
            <tbody>
                {ids.map(id => (
                    <DataGridRow
                        {...{
                            basePath,
                            classes,
                            hover,
                            id,
                            key: id,
                            onToggleItem,
                            record: data[id],
                            resource,
                            rowClick,
                            selected: selectedIds.includes(id),
                        }}
                    >
                        {children}
                    </DataGridRow>
                ))}
            </tbody>
        );
    }
}

interface Props {
    basePath?: string;
    classes?: object;
    className?: string;
    data: object;
    hasBulkActions: boolean;
    hover?: boolean;
    ids: any[];
    isLoading?: boolean;
    onToggleItem?: () => void;
    resource?: string;
    row?: React.ReactNode;
    rowClick?: string | (() => void);
    rowStyle?: () => void;
    selectedIds: any[];
    styles?: object;
    version?: number;
}
