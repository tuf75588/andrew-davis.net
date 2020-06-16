import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import {StyledContainer} from '../shared/pattern';
import Debug from '../components/Debug';

function IndexPage({data}: any): JSX.Element {
  // const title =
  //   data.allMdx.edges[0].node.frontmatter.path ?? "no title available";
  return (
    <Layout>
      <Debug data={data} />
      <StyledContainer>
        <h1>nice to meet you!</h1>
      </StyledContainer>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  {
    allMdx(filter: {frontmatter: {publish: {eq: true}}}) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
