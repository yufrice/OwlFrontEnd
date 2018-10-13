export interface IProps {
    title?: string,
    body?: string,
    action?: React.ReactNode,
    open: boolean,
    onClose: () => void,
    class?: string,
};