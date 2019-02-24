import React from 'react'
import styled from 'styled-components'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../../components/layout'

const Wrapper = styled.div`
  margin: 0 auto;
  h2 {
    font-size: 1.6em;
    color: #ffe230;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 640px;
  font-size: 0.9em;
  p {
    margin-bottom: 1em;
  }
  h3 {
    font-size: 1.3em;
    font-weight: bold;
    margin-top: 1.2em;
    margin-bottom: 0.8em;
  }
  h4 {
    font-size: 1.1em;
    font-weight: bold;
    margin-top: 0.9em;
    margin-bottom: 0.6em;
  }
  ul {
    list-style: disc;
    list-style-position: inside;
    li {
    }
  }
`

const PrivacyPage = () => (
  <StaticQuery
    query={graphql`
      query PurchaseQueryAndroidEn {
        terms: datoCmsInAppPurchaseCopy1 {
          title
          contentNode {
            childMarkdownRemark {
              html
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Wrapper>
          <HelmetDatoCms seo={data.terms.seoMetaTags} />
          <h2>{data.terms.title}</h2>
          <Content
            dangerouslySetInnerHTML={{
              __html: data.terms.contentNode.childMarkdownRemark.html,
            }}
          />
        </Wrapper>
      </Layout>
    )}
  />
)

export default PrivacyPage
