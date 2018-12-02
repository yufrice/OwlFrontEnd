import Tab from '@material-ui/core/Tab';
import _Tabs, { TabsProps } from '@material-ui/core/Tabs';
import Dashboard from '@material-ui/icons/Dashboard';
import Edit from '@material-ui/icons/Edit';
import Search from '@material-ui/icons/Search';
import Settings from '@material-ui/icons/Settings';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IProps } from './type';

export class Tabs extends React.PureComponent<IProps> {
  public render() {
    return (
      <StyledTabs
        value={this.props.tabIndex}
        onChange={this.props.onChange}
        fullWidth={true}
      >
        <Tab
          label={'Search'}
          icon={<Search />}
          component={Link}
          {...{ to: '/' } as any}
        />
        <Tab
          label={'Edit'}
          icon={<Edit />}
          component={Link}
          {...{ to: '/edit' } as any}
        />
        <Tab
          label={'DashBoard'}
          icon={<Dashboard />}
          component={Link}
          {...{ to: '/dashBoard' } as any}
        />
        <Tab
          label={'Config'}
          icon={<Settings />}
          component={Link}
          {...{ to: '/config' } as any}
        />
      </StyledTabs>
    );
  }
}

const StyledTabs = styled(_Tabs as React.SFC<TabsProps>)`
  padding: 0 10px;
`;
