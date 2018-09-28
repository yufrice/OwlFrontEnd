export interface IProps {
    child: React.ReactNode,
    open: boolean,
    onClose?: () => void,
    class?: string,
};