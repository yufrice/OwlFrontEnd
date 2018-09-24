export interface IProps {
    child: React.ReactNode,
    class?: string,
    color?: Color,
    disabled?: boolean,
    onClick: () => void,
    size?: Size,
    variant?: Variant,
};

type Color = 'default'
    | 'inherit'
    | 'primary'
    | 'secondary'

type Size = 'small'
    | 'medium'
    | 'large'

type Variant = 'text'
    | 'flat'
    | 'outlined'
    | 'contained'
    | 'raised'
    | 'fab'
    | 'extendedFab'
