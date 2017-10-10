import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { openModal } from '../actions';

import StartButton from '../components/StartButton';

const mapStateToProps = state => ({
  numberOfTabs: state.tabs.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openModal }, dispatch);

const StartButtonContainer = connect(mapStateToProps, mapDispatchToProps)(StartButton);

export default StartButtonContainer;
