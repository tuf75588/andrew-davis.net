import React, {ReactNode} from 'react';
import {css} from '@emotion/core';

type Props = {
  children: ReactNode;
};

function TextPostBody({children}: Props): JSX.Element | null {
  return (
    <div
      css={css`
        p {
          line-height: 1.5em;
        }
      `}
    >
      {children ? children : null}
    </div>
  );
}

export default TextPostBody;
