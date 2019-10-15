type TextAlign = 'right' | 'left';

export interface FieldProps {
    basePath?: string;
    record?: object;
    resource?: string;
    addLabel?: boolean;
    sortBy?: string;
    source?: string;
    label?: string;
    sortable?: boolean;
    className?: string;
    cellClassName?: string;
    headerClassName?: string;
    textAlign?: TextAlign;
}
