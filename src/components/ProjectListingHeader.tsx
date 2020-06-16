import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
const StyledListingSection = styled.section`
  margin-bottom: 2em;
`;

const StyledListingHeading = styled.p`
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;
`;

type HeaderProps = {
  sectionTitle: string;
};

function ProjectListingHeader({sectionTitle}: HeaderProps) {
  return (
    <React.Fragment>
      <StyledListingSection>
        <StyledListingHeading>Notable {sectionTitle} </StyledListingHeading>
        <hr
          css={css`
            opacity: 0.1;
          `}
        />
      </StyledListingSection>
    </React.Fragment>
  );
}

export default ProjectListingHeader;
