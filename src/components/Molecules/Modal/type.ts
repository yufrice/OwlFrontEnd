export interface IProps {
  child?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  size?: [number, number];
  background?: string;
}
