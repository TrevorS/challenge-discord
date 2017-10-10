import React from 'react';

const TabSelector = ({ tabs, selectTab, deleteTab }) => (
  <div className="TabSelector">
    <ul>
      {tabs.map((tab, i) =>
        <li key={`${i}-${tab.text}`}>
          <span onClick={() => selectTab(i)}>
            {i}
          </span>

          -

          <span onClick={() => deleteTab(i)}>
            X
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default TabSelector;
