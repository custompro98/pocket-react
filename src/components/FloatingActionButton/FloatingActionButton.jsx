import React from 'react';

import './FloatingActionButton.css';

const FloatingActionButton = (props) => {
  const { children, onClick, ...styles } = props;
  const colors = { ...styles, color: styles.fontColor };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="FloatingActionButton"
      style={colors}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

FloatingActionButton.defaultProps = {
  backgroundColor: '#F44336',
  fontColor: 'white'
};

export default FloatingActionButton;
