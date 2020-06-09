import React from "react";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import styled from "@emotion/styled";

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

function PostTemplate({data}) {
  return (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  );
}

export default PostTemplate;

export const query = graphql`
  query {
    mdx {
      frontmatter {
        title
        date
      }
      body
    }
  }
`;
