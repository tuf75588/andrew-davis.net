import React from 'react';
import {graphql} from 'gatsby';
import {css} from '@emotion/core';
import Layout from '../components/layout';
import {StyledContainer} from '../shared/pattern';
import ProfileImage from '../components/ProfileImage';

function IndexPage(): JSX.Element {
  // const title =
  //   data.allMdx.edges[0].node.frontmatter.path ?? "no title available";
  return (
    <Layout>
      <StyledContainer>
        <ProfileImage />
        <h1>nice to meet you!</h1>
        <div
          css={css`
            font-size: 1.3em;
          `}
        >
          My name's Andrew Davis
          <br />
          I’m a creative, ambitious and enterprising web developer.
        </div>
      </StyledContainer>
    </Layout>
  );
}

export default IndexPage;
