import React, { Component } from 'react';

import TabSelector from './TabSelector';
import Tab from './Tab';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickNewTab = this.onClickNewTab.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  onClick(index) {
    this.props.selectTab(index);
  }

  onClickNewTab() {
    this.props.newTab('');
  }

  onClickDelete(index) {
    this.props.selectTab(0);
    this.props.deleteTab(index);
  }

  onTabChange(event) {
    const text = event.target.value;

    console.log('text', text);

    // this.props.editTab(text);
  }

  render() {
    const { tabs, selectedTab } = this.props;

    return (
      <div className="Modal">
        <h1>This is the modal.</h1>

        <TabSelector
          tabs={tabs}
          onClick={this.onClick}
          onClickDelete={this.onClickDelete}
        />

        <Tab tab={tabs[selectedTab].text} onChange={this.onTabChange} />

        <button onClick={this.onClickNewTab}>
          New Tab
        </button>
      </div>
    );
  }
}

export default Modal;
