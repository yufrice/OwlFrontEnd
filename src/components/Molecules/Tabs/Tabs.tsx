import Tab from '@material-ui/core/Tab';
import _Tabs, { TabsProps } from '@material-ui/core/Tabs';
import { Dashboard, Edit, Search } from '@material-ui/icons';
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
      </StyledTabs>
    );
  }
}

const StyledTabs = styled(_Tabs as React.SFC<TabsProps>)`
  padding: 0 10px;
`;
