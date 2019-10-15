import React from 'react';
import { getListControllerProps } from 'ra-core';
import PageHeader from 'antd/es/page-header';
import Layout from 'antd/es/layout';

export default class ListView extends React.PureComponent<Props> {
    render() {
        const { version, title, defaultTitle, children } = this.props;

        const controllerProps = getListControllerProps(this.props);

        return (
            <>
                <PageHeader title={title || defaultTitle} />
                <Layout.Content key={version}>
                    {children &&
                        React.cloneElement(
                            React.Children.only(
                                children as React.ReactFragment[]
                            ),
                            {
                                ...controllerProps,
                            }
                        )}
                </Layout.Content>
            </>
        );
    }
}

interface Props {
    title?: string;
    defaultTitle?: string;
    version?: number;
}
