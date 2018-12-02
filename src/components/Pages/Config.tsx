import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Slider, { SliderProps } from '@material-ui/lab/Slider';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import { actions } from '@/action/app/config';
import { IRootState } from '@reducers';

const Config: React.SFC = (props: any) => (
  <StyledPaper>
    <Typography> 単語距離の閾値 </Typography>
    <StyledSlider
      min={1}
      max={100}
      onChange={props.changeLimit}
      value={props.config.searchLimit}
    />
    <FormControlLabel
      control={<Switch color='primary' />}
      label='ダークテーマ'
    />
  </StyledPaper>
);

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  margin: 10%;
  padding: 10%;
`;

const StyledSlider = styled(Slider as React.SFC<SliderProps>)`
  padding: 20px 0;
`;

export default connect(
  (state: IRootState) => ({
    config: state.app.config,
  }),
  (dispatch: Dispatch) => bindActionCreators({ ...actions }, dispatch),
)(Config);
