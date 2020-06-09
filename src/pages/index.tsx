import React from "react";
import {Link} from "gatsby";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import {css} from "@emotion/core";

const brownStyles = css({color: "brown"});

const IndexPage: React.FC = ({data}: React.PropsWithChildren<any>) => {
  const title =
    data.allMdx.edges[0].node.frontmatter.path ?? "no title available";
  return (
    <Layout>
      <p>welcome everyone to this new dank website</p>
    </Layout>
  );
};

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
