import React from 'react';
import Layout from '../components/layout';
import {Helmet} from 'react-helmet';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';
import {graphql} from 'gatsby';

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

type PostTemplateProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        excerpt: string;
        date: string;
      };
      body: string;
    };
  };
};

function PostTemplate({data}: PostTemplateProps) {
  const {frontmatter, body} = data.mdx;
  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>Andrew Davis | {frontmatter.title}</title>
        </Helmet>
      )}
      {frontmatter.title && (
        <Helmet>
          <meta property="og:title" content={frontmatter.title} />
          <meta name="twitter:title" content={frontmatter.title} />
        </Helmet>
      )}
      {frontmatter.title && (
        <Helmet>
          <meta property="og:description" content={frontmatter.excerpt} />
          <meta name="twitter:description" content={frontmatter.excerpt} />
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        link
        excerpt
        date
      }
      body
    }
  }
`;
