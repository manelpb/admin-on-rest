import React from 'react';
import compose from 'recompose/compose';
import { translate } from 'ra-core';

import ReactPaginate from 'react-paginate';

class BTPagination extends React.Component<Props> {
    defaultProps: Partial<Props> = {
        rowsPerPageOptions: [5, 10, 25],
    };

    getNbPages = () => Math.ceil(this.props.total / this.props.perPage) || 1;

    componentDidUpdate() {
        if (this.props.page < 1 || isNaN(this.props.page)) {
            this.props.setPage(1);
        }
    }

    handlePageChange = (item: { selected: number }) => {
        this.props.setPage(item.selected + 1);
    };

    handlePerPageChange = event => {
        this.props.setPerPage(event.target.value);
    };

    render() {
        return (
            <ReactPaginate
                previousLabel={<span>&laquo;</span>}
                nextLabel={<span>&raquo;</span>}
                breakLabel={'...'}
                breakClassName={'page-item'}
                pageCount={this.getNbPages()}
                pageRangeDisplayed={5}
                pageClassName="page-item"
                onPageChange={this.handlePageChange}
                containerClassName={'pagination'}
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                pageLinkClassName="page-link"
                marginPagesDisplayed={1}
                activeLinkClassName="page-link"
                activeClassName={'active'}
            />
        );
    }
}

interface Props {
    classes?: object;
    className?: string;
    ids?: [];
    isLoading?: boolean;
    page?: number;
    perPage?: number;
    rowsPerPageOptions?: number[];
    setPage?: (page: number) => void;
    setPerPage?: (page: number) => void;
    total?: number;
    translate: any;
}

const enhance = compose(translate);

export default enhance(BTPagination);
