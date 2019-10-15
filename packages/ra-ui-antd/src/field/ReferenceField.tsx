import React from 'react';

import { ReferenceFieldController } from 'ra-core';
import { FieldProps } from '../types';
import ReferenceFieldView from './ReferenceFieldView';

export default class ReferenceField extends React.PureComponent<FieldProps> {
    render() {
        if (React.Children.count(this.props.children) !== 1) {
            throw new Error('<ReferenceField> only accepts a single child');
        }

        return (
            <ReferenceFieldController {...this.props}>
                {controllerProps => (
                    <ReferenceFieldView
                        {...this.props}
                        {...{
                            children: this.props.children,
                            ...controllerProps,
                        }}
                    />
                )}
            </ReferenceFieldController>
        );
    }
}
