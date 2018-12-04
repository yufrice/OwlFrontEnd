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

class Config extends React.Component<any> {
  public render() {
    return (
      <StyledPaper>
        <Typography color='textPrimary'>
          単語距離の閾値: {this.props.config.searchLimit}{' '}
        </Typography>
        <StyledSlider
          min={1}
          max={100}
          step={1}
          onChange={this.props.changeLimit}
          value={this.props.config.searchLimit}
        />
        <FormControlLabel
          control={<Switch color='primary' onChange={this.props.changeTheme} />}
          checked={this.props.config.theme}
          label={<Typography color='textPrimary'>ダークテーマ</Typography>}
        />
      </StyledPaper>
    );
  }
}

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: 30px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 400px;
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
