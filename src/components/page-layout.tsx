import React from "react";
import {graphql} from "gatsby";
import {MDXProvider} from "@mdx-js/react";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {Link} from "gatsby";

import Layout from "./layout";

const shortcodes = {Link};

function PageLayout({data: {mdx}}: any): JSX.Element {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes} />
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
}
export default PageLayout;

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
