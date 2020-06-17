import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Image from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        astronaut: file(relativePath: {regex: "/js.png/i"}) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <Image title="JavaScript" fluid={data.astronaut.childImageSharp.fluid} />
    )}
  />
);
