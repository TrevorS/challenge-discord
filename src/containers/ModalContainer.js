import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { newTab, selectTab, deleteTab, closeModal } from '../actions';

import Modal from '../components/Modal';

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  tabs: state.tabs,
  selectedTab: state.selectedTab,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ newTab, selectTab, deleteTab, closeModal }, dispatch);

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
