import React from 'react';
import { ListController, ListParams } from 'ra-core';
import { Location } from 'history';

import ListView from './ListView';

export default class List extends React.PureComponent<Props> {
    static defaultProps: Partial<Props> = {
        perPage: 10,
        sort: {
            field: 'id',
            order: 'DESC',
        },
    };

    render() {
        return (
            <ListController {...this.props}>
                {controllerProps => (
                    <ListView {...this.props} {...controllerProps} />
                )}
            </ListController>
        );
    }
}

interface Props {
    basePath: string;
    location: Location;
    query: ListParams;
    resource: any;
    filter: object;
    filterDefaultValues?: object;
    filters?: React.ReactElement<any>;
    pagination?: React.ReactElement<any>;
    perPage: number;
    sort: {
        field: string;
        order: string;
    };
    title?: string;

    bulkActions?: boolean;
    bulkActionButtons?: boolean;
}
