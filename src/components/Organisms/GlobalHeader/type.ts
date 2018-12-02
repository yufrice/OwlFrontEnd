export interface IProps {
  onChange: (e: React.ChangeEvent<HTMLElement>, value: number) => void;
  logoutHandler: () => void;
  tabIndex: number;
}
