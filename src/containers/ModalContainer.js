import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { newTab, selectTab, deleteTab } from '../actions';

import Modal from '../components/Modal';

const mapStateToProps = state => ({
  tabs: state.tabs,
  selectedTab: state.selectedTab,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ newTab, selectTab, deleteTab }, dispatch);

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
