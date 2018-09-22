export interface IProps {
    className?: string,
    disabled?: boolean,
    label?: React.ReactNode,
    error?: boolean,
    type?: InputType,
    required?: boolean,
    onChange?: (_: object) => void,
    value?: Value,
};

type Value = string
    | number
    | boolean

type InputType = 'hidden'
    | 'text'
    | 'search'
    | 'password'
    | 'number'
    | 'color'