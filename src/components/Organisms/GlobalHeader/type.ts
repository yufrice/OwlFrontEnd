export interface IProps {
    class?: string,
    color?: Color,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
    position?: Position,
};

export interface IState {
    configOpen: boolean,
    tabIndex: number,
};

type Color = 'inherit'
    | 'primary'
    | 'secondary'
    | 'default'

type Position = 'fixed'
    | 'absolute'
    | 'sticky'
    | 'static'

