import React from 'react';

const StartButton = ({ openModal, numberOfTabs }) => (
  <div className="StartButton">
    <button onClick={openModal}>
      Open
    </button>

    <span className="StartButton-numberOfTabs">
      Number of tabs: { numberOfTabs }
    </span>
  </div>
);

export default StartButton;
