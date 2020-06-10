import React from "react";
import PropTypes from "prop-types";
import {useStaticQuery, graphql} from "gatsby";
import Navbar from "./Navbar";
import GlobalStyles from "../shared/GlobalStyles";
import {Helmet} from "react-helmet";
import {Main, StyledTitle, TitleLink, StyledHeader} from "../shared/pattern";

function Layout({children}) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Main>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
          rel="stylesheet"
        />
        <title>Andrew Davis</title>
        <meta property="og:title" content="Andrew Davis" />
        <meta property="og:description" content="Andrew's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://andrew-davis.net" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Andrew's Portfolio" />
        <meta name="twitter:creator" content="@BooleanValue1" />
      </Helmet>

      <StyledHeader>
        <StyledTitle>
          <TitleLink to="/">Andrew Davis</TitleLink>
        </StyledTitle>
        <Navbar />
      </StyledHeader>
      {children}
    </Main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
