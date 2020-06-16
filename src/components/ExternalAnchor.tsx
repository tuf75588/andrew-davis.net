import React from 'react';

function XA({children, ...props}: React.PropsWithChildren<any>) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default XA;
