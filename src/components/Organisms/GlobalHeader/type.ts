export interface IProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    onClose?: () => void,
    onChange?: (e: React.ChangeEvent<{}>, value: number) => void,
    tabIndex?: number,
    configView?: React.ReactNode,
    configActive?: boolean,
};
