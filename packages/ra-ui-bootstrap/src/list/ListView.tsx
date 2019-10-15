import React from 'react';
import { getListControllerProps } from 'ra-core';
import Pagination from './Pagination';

export default class ListView extends React.PureComponent<Props> {
    render() {
        const {
            version,
            title,
            defaultTitle,
            children,
            bulkActions,
            bulkActionButtons,
            pagination,
        } = this.props;

        const controllerProps = getListControllerProps(this.props);

        return (
            <>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
                    <h2>{title || defaultTitle}</h2>
                </div>
                <div key={version}>
                    {children &&
                        React.cloneElement(
                            React.Children.only(
                                children as React.ReactFragment[]
                            ),
                            {
                                ...controllerProps,
                                hasBulkActions:
                                    bulkActions !== false &&
                                    bulkActionButtons !== false,
                            }
                        )}
                    {pagination && <Pagination {...controllerProps} />}
                </div>
            </>
        );
    }
}

interface Props {
    title?: string;
    defaultTitle?: string;
    version?: number;
    bulkActions?: boolean;
    bulkActionButtons?: boolean;
    pagination?: boolean | React.ReactNode;
}
