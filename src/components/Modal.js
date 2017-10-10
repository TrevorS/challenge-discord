import React, { Component } from 'react';

import TabContainer from '../containers/TabContainer';
import TabSelectorContainer from '../containers/TabSelectorContainer';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onClickNewTab = this.onClickNewTab.bind(this);
  }

  onClick(index) {
    this.props.selectTab(index);
  }

  onClickNewTab() {
    this.props.newTab('New Tab');
  }

  render() {
    const { modalOpen } = this.props;

    if (modalOpen) {
      return (
        <div className="Modal">
          <div className="Modal-tabs">
            <TabSelectorContainer />
            <TabContainer />
          </div>

          <button onClick={this.onClickNewTab}>
            New Tab
          </button>

          <button onClick={this.props.closeModal}>
            Close Modal
          </button>
        </div>
      );
    }

    return (
      <div />
    );
  }
}

export default Modal;
