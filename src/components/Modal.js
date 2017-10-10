import React, { Component } from 'react';

import TabContainer from '../containers/TabContainer';
import TabSelectorContainer from '../containers/TabSelectorContainer';

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
    return (
      <div className="Modal">
        <h1>This is the modal.</h1>

        <TabSelectorContainer />
        <TabContainer />

        <button onClick={this.onClickNewTab}>
          New Tab
        </button>
      </div>
    );
  }
}

export default Modal;
