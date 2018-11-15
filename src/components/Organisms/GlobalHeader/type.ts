export interface IProps {
    style?: React.CSSProperties,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    onClose?: () => void,
    onChange: (e: React.ChangeEvent<HTMLElement>, value: number) => void,
    tabIndex?: number,
    configView?: React.ReactNode,
    configActive?: boolean,
};
