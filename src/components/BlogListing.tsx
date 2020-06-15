import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

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

function BlogListing<T>({blogPosts}: BlogPostType) {
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
