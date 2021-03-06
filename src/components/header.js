import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from './../images/logo-full.png'

const HeaderWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const H1 = styled.h1`
  margin: 0;
`
const HomeLink = styled(Link)`
  background: transparent url(${logo}) no-repeat;
  background-size: 200%, contain;
  background-position: center;
  height: 250px;
  margin-bottom: -40px;
  display: block;
  text-indent: -9999em;
  cursor: pointer;

  @media (min-width: 360px) {
    height: 280px;
  }
  @media (min-width: 400px) {
    background-size: 160%, contain;
  }
  @media (min-width: 500px) {
    background-size: 120%, cover;
  }
  @media (min-width: 640px) {
    background-size: cover;
  }
  @media (min-width: 770px) {
    height: 330px;
    margin-bottom: -60px;
  }
  @media (min-width: 960px) {
    height: 390px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>
      <HomeLink to="/">Pidro - back to home</HomeLink>
    </h1>
  </HeaderWrapper>
)

export default Header
