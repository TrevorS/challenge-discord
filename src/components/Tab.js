import React from 'react';

const Tab = ({ text, onChange }) => (
  <div className="Tab">
    <textarea value={text} onChange={onChange} />
  </div>
);

export default Tab;
