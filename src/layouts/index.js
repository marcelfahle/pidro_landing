import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Helmet from 'react-helmet'

import Header from '../components/header'

const baseStyles = injectGlobal`
  ${reset}
	body, html, body > div {
		height: 100%;
	}
`
const SiteWrapper = styled.div`
  min-height: 100%;
  padding-bottom: 40px;
  background: rgb(13, 48, 75);
  background: radial-gradient(
    circle,
    rgba(28, 103, 160, 1) 0%,
    rgba(13, 48, 75, 1) 100%
  );
  font-family: 'Sanchez', serif;
  line-height: 1.2;
  color: white;
  a {
    text-decoration: none;
    color: #ffe230;
  }
  a:visited,
  a:hover,
  a:active {
    color: #ffe230;
  }
`

const Content = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  max-width: 1200px;
  margin: 0 auto;
`

const Layout = ({ children, data }) => (
  <SiteWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Content>{children()}</Content>
  </SiteWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
