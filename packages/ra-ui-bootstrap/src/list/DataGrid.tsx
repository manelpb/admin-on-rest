import React from 'react';

import { Table } from 'reactstrap';

import DataGridBody from './DataGridBody';
import DataGridHeaderCell from './DataGridHeaderCell';
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
            classes,
            rowClick,
            hasBulkActions,
            hover,
            onToggleItem,
            resource,
            rowStyle,
            selectedIds,
            version,
            currentSort,
        } = this.props;

        // /**
        //  * if loadedOnce is false, the list displays for the first time, and the dataProvider hasn't answered yet
        //  * if loadedOnce is true, the data for the list has at least been returned once by the dataProvider
        //  * if loadedOnce is undefined, the Datagrid parent doesn't track loading state (e.g. ReferenceArrayField)
        //  */
        // if (loadedOnce === false) {
        //     return (
        //         <DatagridLoading
        //             classes={classes}
        //             className={className}
        //             expand={expand}
        //             hasBulkActions={hasBulkActions}
        //             nbChildren={React.Children.count(children)}
        //         />
        //     );
        // }

        /**
         * Once loaded, the data for the list may be empty. Instead of
         * displaying the table header with zero data rows,
         * the datagrid displays nothing in this case.
         */
        if (!isLoading && (ids.length === 0 || total === 0)) {
            return null;
        }

        /**
         * After the initial load, if the data for the list isn't empty,
         * and even if the data is refreshing (e.g. after a filter change),
         * the datagrid displays the current data.
         */

        return (
            <Table striped size="md">
                <thead>
                    <tr>
                        {React.Children.map(
                            children,
                            (field: React.ReactElement<FieldProps>, index) =>
                                React.isValidElement(field) ? (
                                    <DataGridHeaderCell
                                        currentSort={currentSort}
                                        field={field}
                                        isSorting={
                                            currentSort.field ===
                                            (field.props.sortBy ||
                                                field.props.source)
                                        }
                                        key={field.props.source || index}
                                        resource={resource}
                                        updateSort={this.updateSort}
                                    />
                                ) : null
                        )}
                    </tr>
                </thead>
                <DataGridBody
                    {...{
                        basePath,
                        classes,
                        rowClick,
                        data,
                        hasBulkActions,
                        hover,
                        ids,
                        isLoading,
                        onToggleItem,
                        resource,
                        rowStyle,
                        selectedIds,
                        version,
                    }}
                >
                    {children}
                </DataGridBody>
            </Table>
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
}

export default Datagrid;
