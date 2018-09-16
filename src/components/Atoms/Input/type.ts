export interface IProps {
    className?: string,
    value?: Value,
};

type Value = 'string'
    | 'number'
    | 'bool'
    | 'arrayOf'

// ToDo
// https://material-ui.com/api/text-field/