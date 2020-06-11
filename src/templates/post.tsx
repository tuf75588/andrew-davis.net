import React from "react";
import {graphql, PageProps} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";

interface PostTemplateProps extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
      body: string;
    };
  };
}

function PostTemplate<PostTemplateProps>({data}: any) {
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
