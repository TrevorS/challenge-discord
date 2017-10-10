import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab, deleteTab } from '../actions';

import TabSelector from '../components/TabSelector';

const mapStateToProps = state => ({
  tabs: state.tabs,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab, deleteTab }, dispatch);

const TabSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(TabSelector);

export default TabSelectorContainer;
