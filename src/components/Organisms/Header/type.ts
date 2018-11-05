export interface IProps {
    child: React.ReactNode,
    class?: string,
    color?: Color,
    position?: Position,
};

type Color = 'inherit'
    | 'primary'
    | 'secondary'
    | 'default'

type Position = 'fixed'
    | 'absolute'
    | 'sticky'
    | 'static'

