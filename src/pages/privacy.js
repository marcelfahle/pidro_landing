import React from 'react'
import styled from 'styled-components'

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

const PrivacyPage = ({ data }) => (
  <Wrapper>
    <h2>{data.privacy.title}</h2>
    <Content
      dangerouslySetInnerHTML={{
        __html: data.privacy.contentNode.childMarkdownRemark.html,
      }}
    />
  </Wrapper>
)

export default PrivacyPage

export const query = graphql`
  query PrivacyQuery {
    privacy: datoCmsPrivacyPolicy {
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
