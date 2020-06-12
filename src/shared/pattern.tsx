// custom components that will be used in different places throughout the site
import React from "react";
import styled from "@emotion/styled";
import {Link} from "gatsby";

export const StyledContainer = styled.div`
  height: 350px;
  @media (min-width: 520px) {
    height: 400px;
  }
  @media (min-width: 1400px) {
    height: 500px;
  }
`;
export const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;
  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }
  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

export const StyledHeader = styled.header``;

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  margin: 0.3em 0;
  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }
  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
`;

export const TitleLink = styled(Link)`
  text-transform: lowercase;
  color: #000;
  text-decoration: none;
  border: none;
  &:hover {
    color: #0000ff;
  }
`;
