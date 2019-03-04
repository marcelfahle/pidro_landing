import React from 'react'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StaticQuery, graphql } from 'gatsby'
import Link, { withPrefix } from 'gatsby-link'
import { ReactTypeformEmbed } from 'react-typeform-embed'

import Layout from '../components/layout'
import phone from './../images/phone-mock.png'
import appStoreLogo from './../images/badge-appstore.png'
import playStoreLogo from './../images/badge-playstore.png'

const IndexPage = () => (
  <Layout>
    <div>
      <ReactTypeformEmbed url="https://pidro647320.typeform.com/to/NpcCTj" />
    </div>
  </Layout>
)

export default IndexPage
