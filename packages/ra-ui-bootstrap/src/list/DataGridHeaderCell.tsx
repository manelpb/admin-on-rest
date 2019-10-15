import React from 'react';
import compose from 'recompose/compose';
import shouldUpdate from 'recompose/shouldUpdate';

import { FieldTitle, translate } from 'ra-core';
import { FieldProps } from '../types';

class DataGridHeaderCell extends React.PureComponent<Props> {
    render() {
        const { field, resource } = this.props;

        return (
            <th>
                <FieldTitle
                    label={field.props.label}
                    source={field.props.source}
                    resource={resource}
                />
            </th>
        );
    }
}

interface Props {
    classes?: object;
    className?: string;
    field?: React.ReactElement<FieldProps>;
    currentSort?: {
        field: string;
        order: string;
    };
    isSorting?: boolean;
    sortable?: boolean;
    resource?: string;
    updateSort: (event: any) => void;
}

const enhance = compose<{}, Props>(
    shouldUpdate(
        (props: Props, nextProps) =>
            props.isSorting !== nextProps.isSorting ||
            (nextProps.isSorting &&
                props.currentSort.order !== nextProps.currentSort.order) ||
            (nextProps.isSorting && props.sortable !== nextProps.sortable)
    ),
    translate
);

export default enhance(DataGridHeaderCell);
