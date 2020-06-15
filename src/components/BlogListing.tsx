import React from 'react';
import styled from '@emotion/styled';
import {useStaticQuery, graphql, Link} from 'gatsby';

type BlogPostType = {
  blogPosts: {
    fields: {
      slug: string;
      date: string;
    };
    title: string;
  }[];
};

const DateSpan = styled.span`
  display: none;
  color: #999;
  margin-left: 0.5em;
  @media (min-width: 520px) {
    display: inline;
  }
`;

const StyledBlogListing = styled.ul`
  list-style: none;
`;

const StyledBlogItem = styled.li`
  font-size: 1.8rem;
  margin-bottom: 0.5em;
`;

/*
this component will just be a list of blog posts
blog item will be a seperate component
*/

function BlogListing() {
  const data = useStaticQuery(graphql`
    query blogQuery {
      allMdx(filter: {fields: {type: {eq: "post"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "LL")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const blogPosts = data.allMdx.edges ? data.allMdx.edges : [];
  const posts = blogPosts.map((post: any) => {
    return (
      <StyledBlogItem key={post.node.id}>
        <Link to={`${post.node.fields.slug}`}>
          {post.node.frontmatter.title}
        </Link>
        <DateSpan>({post.node.frontmatter.date})</DateSpan>
      </StyledBlogItem>
    );
  });
  return <StyledBlogListing>{posts}</StyledBlogListing>;
}

export default BlogListing;
// we will eventually need a graphql query here
