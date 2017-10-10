import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);

    const index = this.props.selectedTab;
    const text = (this.props.tabs[index] && this.props.tabs[index].text) || '';

    this.state = {
      text,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const index = newProps.selectedTab;
    const tab = newProps.tabs[index] || newProps.tabs[0];

    const text = tab.text || '';

    if (text !== this.state.text) {
      this.setState({ text });
    }
  }

  onChange(event) {
    const value = event.target.value;

    this.props.editTab(value);
  }

  render() {
    return (
      <div className="Tab">
        <textarea value={this.state.text} onChange={this.onChange} />
      </div>
    );
  }
}

export default Tab;
