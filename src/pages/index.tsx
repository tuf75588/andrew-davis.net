import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import {StyledContainer} from "../shared/pattern";
import Debug from "../components/Debug";
function IndexPage({data}): JSX.Element {
  // const title =
  //   data.allMdx.edges[0].node.frontmatter.path ?? "no title available";
  return (
    <Layout>
      <Debug data={data} />
      <StyledContainer>
        <h1>nice to meet you!</h1>
        {data.allMdx.edges.map(({node}: any) => {
          return <p>{node.frontmatter.title}</p>;
        })}
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
            title
            path
          }
        }
      }
    }
  }
`;
