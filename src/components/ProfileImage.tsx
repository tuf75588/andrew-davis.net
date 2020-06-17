import React from 'react';
import {css} from '@emotion/core';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
function LandingImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
          fixed(width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      css={css`
        margin-top: 50px;
        border-radius: 20px;
        filter: opacity(0.8);
      `}
    />
  );
}

export default LandingImage;
