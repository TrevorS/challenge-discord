import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { editTab } from '../actions';

import Tab from '../components/Tab';

const mapStateToProps = state => ({
  tabs: state.tabs,
  selectedTab: state.selectedTab,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ editTab }, dispatch);

const TabContainer = connect(mapStateToProps, mapDispatchToProps)(Tab);

export default TabContainer;
