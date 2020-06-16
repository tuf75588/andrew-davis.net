import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import ProjectLinks from '../components/ProjectLinks';

function ProjectTemplate({data}: any) {
  const {body, frontmatter} = data.mdx;
  console.log(data);

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>Andrew Davis | {frontmatter.title} </title>
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      <ProjectLinks
        repo={frontmatter.repo}
        date={frontmatter.date}
        lang={frontmatter.lang}
        link={frontmatter.link}
      />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export default ProjectTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        link
        repo
        date
        lang
        link
      }
      body
    }
  }
`;
