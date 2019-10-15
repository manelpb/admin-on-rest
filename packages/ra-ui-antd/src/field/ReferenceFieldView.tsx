import React from 'react';
import { FieldProps } from '../types';
import sanitizeRestProps from './sanitizeRestProps';

export default class ReferenceFieldView extends React.PureComponent<Props> {
    render() {
        const {
            allowEmpty,
            basePath,
            reference,
            referenceRecord,
            translateChoice = false,
        } = this.props;

        if (!this.props.referenceRecord) {
            return null;
        }

        return (
            <>
                {React.cloneElement(
                    React.Children.only(this.props
                        .children as React.ReactFragment[]),
                    {
                        record: referenceRecord,
                        resource: reference,
                        allowEmpty,
                        basePath,
                        translateChoice,
                        ...sanitizeRestProps(this.props),
                    }
                )}
            </>
        );
    }
}

interface Props extends FieldProps {
    allowEmpty?: boolean;
    isLoading?: boolean;
    reference?: string;
    referenceRecord?: object;
    resourceLinkPath?: string | boolean;
    translateChoice?: boolean;
}
