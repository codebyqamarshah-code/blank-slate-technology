import React from 'react';

const Container = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`max-w-7xl mx-auto px-6 md:px-12 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
