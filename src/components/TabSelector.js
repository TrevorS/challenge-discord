import React from 'react';

const TabSelector = ({ tabs, onClick, onClickDelete }) => (
  <div className="TabSelector">
    <ul>
      {tabs.map((tab, i) =>
        <li key={tab.text} onClick={() => onClick(i)}>
          <span onClick={() => onClick(i)}>
            {i}
          </span>

          -

          <span onClick={() => onClickDelete(i)}>
            X
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default TabSelector;
