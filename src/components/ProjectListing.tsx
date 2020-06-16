import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import styled from '@emotion/styled';

const StyledProjectListing = styled.ul`
  list-style: none;
  margin-top: 0.5em;
`;

const StyledProjectItem = styled.li`
  font-size: 1.8rem;
  margin-bottom: 0.5em;
  line-height: 1.5em;
`;

const StyledLinkWrap = styled.span`
  display: block;
  @media (min-width: 550px) {
    display: inline;
  }
`;

function ProjectListing() {
  const data = useStaticQuery(graphql`
    query projectQuery {
      allMdx(
        filter: {
          fields: {type: {eq: "project"}}
          frontmatter: {publish: {eq: true}}
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const projectListing = data.allMdx.edges.map((project: any) => {
    return (
      <StyledProjectItem key={project.node.id}>
        <StyledLinkWrap>
          <Link to={project.node.fields.slug}>
            {project.node.frontmatter.title}
          </Link>
        </StyledLinkWrap>
      </StyledProjectItem>
    );
  });
  return <StyledProjectListing>{projectListing}</StyledProjectListing>;
}

export default ProjectListing;
