import React from 'react';
import styled from '@emotion/styled';

// this component will just be rendering proejct meta info link repo, link, title, and deployment

const StyledProjectLinksList = styled.ul`
  list-style: none;
  font-size: 1.8rem;
`;

const StyledProjectLink = styled.li`
  display: inline;
  line-height: 1.5em;
  &:after {
    content: ' | ';
  }
  &:last-child {
    &:after {
      content: '';
    }
  }
`;

// types
type ProjectLinkTypes = {
  link: string;
  repo: string;
  date: string;
  lang: string;
};

function ProjectLinks({
  link,
  repo,
  date,
  lang,
}: ProjectLinkTypes): JSX.Element | null {
  if (!(!!link || !!repo)) return null;
  return (
    <StyledProjectLinksList>
      {link && (
        <StyledProjectLink>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link.length > 40 ? 'Link' : link}
          </a>
        </StyledProjectLink>
      )}
      {date && <StyledProjectLink>{date}</StyledProjectLink>}
      {lang && <StyledProjectLink>{lang}</StyledProjectLink>}
      {repo && (
        <StyledProjectLink>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Repo
          </a>
        </StyledProjectLink>
      )}
    </StyledProjectLinksList>
  );
}

export default ProjectLinks;
