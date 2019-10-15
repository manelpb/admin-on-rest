import React from 'react';
import { ListController, ListParams } from 'ra-core';
import { Location } from 'history';

import ListView from './ListView';
import Pagination from './Pagination';

export default class List extends React.PureComponent<Props> {
    static defaultProps: Partial<Props> = {
        perPage: 10,
        sort: {
            field: 'id',
            order: 'DESC',
        },
        pagination: <Pagination />,
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

// List.propTypes = {
//     // the props you can change
//     // actions: PropTypes.element,
//     // aside: PropTypes.node,
//     // bulkActions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
//     // bulkActionButtons: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
//     children: PropTypes.node,
//     classes: PropTypes.object,
//     className: PropTypes.string,
//     filter: PropTypes.object,
//     filterDefaultValues: PropTypes.object,
//     filters: PropTypes.element,
//     pagination: PropTypes.element,
//     perPage: PropTypes.number.isRequired,
//     sort: PropTypes.shape({
//         field: PropTypes.string,
//         order: PropTypes.string,
//     }),
//     title: PropTypes.any,
//     // // the props managed by react-admin
//     authProvider: PropTypes.func,
//     hasCreate: PropTypes.bool.isRequired,
//     hasEdit: PropTypes.bool.isRequired,
//     hasList: PropTypes.bool.isRequired,
//     hasShow: PropTypes.bool.isRequired,
//     location: PropTypes.object.isRequired,
//     match: PropTypes.object.isRequired,
//     path: PropTypes.string,
//     resource: PropTypes.string.isRequired,
//     // theme: PropTypes.object.isRequired,
// };

// List.defaultProps = {
//     filter: {},
//     perPage: 10,
// };

// export default List;
