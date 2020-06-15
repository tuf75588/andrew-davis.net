import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link, graphql} from 'gatsby';

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
  display: none;
`;

const StyledBlogItem = styled.li`
  font-size: 1.8rem;
  margin-bottom: 0.5em;
`;

/*
this component will just be a list of blog posts
blog item will be a seperate component
*/

function BlogListing({data}: any) {
  console.log(data);
  return (
    <div
      css={css`
        background: black;
        width: 500px;
        color: white;
      `}
    >
      a listing of blog posts
    </div>
  );
}

export default BlogListing;
// we will eventually need a graphql query here
graphql`
  {
    allMdx(filter: {fields: {type: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
