export interface IProps {
    child: React.ReactNode,
    class?: string,
    align?: Align,
    color?: Color,
    variant?: Variant,
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

type Variant = 'display4'
    | 'display3'
    | 'display2'
    | 'display1'
    | 'headline'
    | 'title'
    | 'subheading'
    | 'body2'
    | 'body1'
    | 'caption'
    | 'button'