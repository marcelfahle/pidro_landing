import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Helmet from 'react-helmet'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Link, { withPrefix } from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share'
import appStoreLogo from './../images/badge-appstore.png'
import playStoreLogo from './../images/badge-playstore.png'

import Header from '../components/header'

const GlobalStyle = createGlobalStyle`
  ${reset}
	body, html, body > div {
		height: 100%;
	}
`
const SiteWrapper = styled.div`
  min-height: 100vh;
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

const Support = styled.div`
  font-size: 1.1em;
  margin-bottom: 20px;
  text-align: center;
`

const Copyright = styled.div`
  border-top: 1px solid #09afe6;
  padding-top: 20px;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
`

const Content = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  max-width: 1200px;
  margin: 0 auto;
`

const Badges = styled.div`
  display: table;
  margin: 0 auto 30px auto;
  ul {
    list-style: none;
    margin: 0;
    padding-top: 20px;
    li {
      display: inline-block;
      width: 50%;
      max-width: 130px;
      img {
        max-width: 100%;
        max-height: 60px;
      }
    }
  }
`
const SocialButtons = styled.div`
  padding-top: 40px;
  display: block;
  margin-bottom: 20px;
  p {
    text-align: center;
    margin-bottom: 10px;
  }
`
const ButtonList = styled.div`
  display: table;
  margin: 0 auto;
  > div {
    display: inline-block;
    margin-left: 6px;
    margin-right: 6px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        home: datoCmsHome {
          intro
          appStoreUrl
          playStoreUrl
          socialShareUrl
          screenshots {
            url
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
        social: datoCmsSocialMediaSetting {
          sharingUrl
          facebookShareTitle
          facebookShareHashtag
          twitterTitle
          twitterVia
          linkedinTitle
          linkedinDescription
          whatsappTitle
          eMailSubject
          eMailBody
        }
        site {
          siteMetadata {
            title
          }
        }
        datoCmsSite {
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
          globalSeo {
            fallbackSeo {
              title
              description
              image {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SiteWrapper>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'The Multiplayer Card Game from Finland.',
            },
            {
              name: 'keywords',
              content:
                'pidro, pedro, card game, multiplayer, iOS, android, game, games, cards, casino, fun',
            },
          ]}
        />
        <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>

        <SocialButtons>
          <p>Let's get Social:</p>
          <ButtonList>
            <FacebookShareButton
              quote={data.social.facebookShareTitle}
              hashtag={data.social.facebookShareHashtag}
              url={data.social.sharingUrl}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              url={data.social.sharingUrl}
              title={data.social.twitterTitle}
              via={data.social.twitterVia}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={data.social.sharingUrl}
              title={data.social.whatsappTitle}
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={data.social.sharingUrl}
              title={data.social.linkedinTitle}
              description={data.social.linkedinDescription}
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <EmailShareButton
              url={data.social.sharingUrl}
              subject={data.social.eMailSubject}
              body={data.social.eMailBody}
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </ButtonList>
        </SocialButtons>

        <Badges>
          <ul>
            <li>
              <a href={data.home.appStoreUrl} target="_blank">
                <img className="apple" src={appStoreLogo} />
              </a>
            </li>
            <li>
              <a href={data.home.playStoreUrl} target="_blank">
                <img className="android" src={playStoreLogo} />
              </a>
            </li>
          </ul>
        </Badges>
        <Support>
          <p>
            Technical Problems? We're here to help! <br />
            <a href="mailto:support@pidro.net">Click here</a>
          </p>
        </Support>

        <Copyright>
          <p>Oneapps &copy; 2016-{new Date().getFullYear()}</p>
          <p>
            <a href="/privacy">Privacy Policy</a>
            {` - `}
            <a href="/terms-of-use">Terms of Use</a>
            {` - `}
            <br />
            In-App Purchases:
            {` - `}
            <a href="/in-app-purchases/ios/en">iOS (english)</a>
            {` - `}
            <a href="/in-app-purchases/ios/sv">iOS (swedish)</a>
            {` - `}
            <a href="/in-app-purchases/android/en">Android (english)</a>
            {` - `}
            <a href="/in-app-purchases/android/sv">Android (swedish)</a>
          </p>
        </Copyright>
      </SiteWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
