import * as React from 'react';

import { SearchForm } from '@components/Molecules';
import { SearchResult } from '@components/Organisms';
import Styled from 'styled-components';

export class SearchView extends React.PureComponent<any> {
  public render() {
    return (
      <StyledView>
        <StyledForm>
          <SearchForm value={this.props.input} {...this.props} />
        </StyledForm>
        <SearchResult
          items={this.props.result}
          searchState={this.props.state}
        />
      </StyledView>
    );
  }
}

const StyledForm = Styled.div`
    display: flex;
    justify-content: center;
`;

const StyledView = Styled.div`
    flex: 1;
`;
