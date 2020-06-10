import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  height: 350px;
  @media (min-width: 520px) {
    height: 400px;
  }
  @media (min-width: 1400px) {
    height: 500px;
  }
`;

function IndexPage({data}): JSX.Element {
  const title =
    data.allMdx.edges[0].node.frontmatter.path ?? "no title available";
  return (
    <Layout>
      <StyledContainer>
        <h1>nice to meet you!</h1>
      </StyledContainer>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;
