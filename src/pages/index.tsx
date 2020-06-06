import React from "react";
import {Link} from "gatsby";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import {css} from "@emotion/core";

const brownStyles = css({color: "brown"});

const IndexPage: React.FC = ({data}: React.PropsWithChildren<any>) => {
  console.log(brownStyles);
  console.log(data.allMdx);
  const title =
    data.allMdx.edges[0].node.frontmatter.path ?? "no title available";
  console.log(title);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image />
      </div>
      <Link to={title}>{title}</Link>
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
