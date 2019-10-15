import React from 'react';

import Table, { PaginationConfig } from 'antd/es/table';
import { FieldProps } from '../types';

class Datagrid extends React.PureComponent<Props> {
    static defaultProps: Props = {
        data: {},
        hasBulkActions: false,
        ids: [],
        selectedIds: [],
    };

    updateSort = event => {
        event.stopPropagation();
        this.props.setSort(event.currentTarget.dataset.sort);
    };

    render() {
        const {
            children,
            data,
            ids,
            isLoading,
            total,
            basePath,
            resource,
        } = this.props;

        const columns = React.Children.map(
            children,
            (field: React.ReactElement<FieldProps>) => {
                return {
                    title: field.props.label,
                    name: field.props.source,
                    dataIndex: field.props.source,
                    key: field.props.source,
                };
            }
        );

        const dataSource = ids.map(id => {
            const result = {
                ...data[id],
                ...{ key: id },
            };

            React.Children.forEach(
                children,
                (field: React.ReactElement<FieldProps>, index: number) => {
                    if (result[field.props.source]) {
                        result[field.props.source] = React.isValidElement(field)
                            ? React.cloneElement(field, {
                                  record: data[id],
                                  basePath: field.props.basePath || basePath,
                                  resource,
                              })
                            : null;
                    }
                }
            );

            return result;
        });

        const pagination: PaginationConfig = {
            total,
            onChange: (pageNum: number) => {
                this.props.setPage(pageNum);
            },
        };

        return (
            <Table
                bordered
                columns={columns}
                dataSource={dataSource}
                pagination={pagination}
                loading={isLoading}
            />
        );
    }
}

interface Props {
    basePath?: string;
    classes?: object;
    className?: string;
    currentSort?: {
        field: string;
        order: string;
    };
    data: object;
    hasBulkActions: boolean;
    hover?: boolean;
    ids: any[];
    isLoading?: boolean;
    onSelect?: () => void;
    onToggleItem?: () => void;
    resource?: string;
    rowClick?: string | (() => void);
    rowStyle?: () => void;
    selectedIds: any[];
    setSort?: (field: string) => void;
    total?: number;
    version?: number;
    setPage?: (page: number) => void;
}

export default Datagrid;
