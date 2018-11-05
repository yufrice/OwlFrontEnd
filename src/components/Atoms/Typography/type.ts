export interface IProps {
    child: React.ReactNode,
    class?: string,
    align?: Align,
    color?: Color,
    variant?: Variant,
    id?: string,
};

type Align = 'inherit'
    | 'left'
    | 'center'
    | 'right'
    | 'justify'

type Color = 'default'
    | 'error'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'

type Variant = 'display1'
    | 'display2'
    | 'display3'
    | 'display4'
    | 'headline'
    | 'title'
    | 'subheading'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'