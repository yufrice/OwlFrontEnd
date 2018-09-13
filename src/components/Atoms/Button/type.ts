export interface IProps {
    child: React.ReactNode,
    class?: string,
    color?: Color,
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
