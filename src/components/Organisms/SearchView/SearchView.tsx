import * as React from 'react';

import { SearchForm } from '@components/Molecules';
import { SearchResult } from '@components/Organisms';
import Styled from 'styled-components';

export const SearchView: React.SFC<any> = (props: any) => (
    <StyledView>
        <StyledForm>
            <SearchForm value={props.input} {...props}/>
        </StyledForm>
        <SearchResult items={props.result} searchState={props.state} />
    </StyledView>
);

const StyledForm = Styled.div`
    display: flex;
    justify-content: center;
`;

const StyledView = Styled.div`
    flex: 1;
`;
