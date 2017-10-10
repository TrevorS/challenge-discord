import React from 'react';

import './TabSelector.css';

const TabSelector = ({ tabs, selectTab, deleteTab }) => (
  <div className="TabSelector">
    <ul>
      {tabs.map((tab, i) =>
        <li key={`${i}-${tab.text}`}>
          <span onClick={() => selectTab(i)}>
            {i}
          </span>

          &nbsp;-&nbsp;

          <span className="TabSelector-X" onClick={() => deleteTab(i)}>
            Delete
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default TabSelector;
