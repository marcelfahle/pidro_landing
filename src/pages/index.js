import React from 'react'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StaticQuery, graphql } from 'gatsby'
import Link, { withPrefix } from 'gatsby-link'
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

import Layout from '../components/layout'
import appStoreLogo from './../images/badge-appstore.png'
import playStoreLogo from './../images/badge-playstore.png'
import phone from './../images/phone-mock.png'

const Systems = styled.h2`
  color: white;
  text-align: center;
  font-size: 1.4em;
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

const Swiper = styled.div`
  border: 2px solid #09afe6;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto 30px auto;

  @media (min-width: 720px) {
    border: none;
    background: transparent url(${phone}) no-repeat;
    background-size: contain;
    width: 680px;
    height: 340px;
    > div {
      width: 464px;
      height: 290px;
      margin: 24px auto 0 auto;
    }
  }
`

const SocialButtons = styled.div`
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

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
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
      }
    `}
    render={data => (
      <Layout>
        <HelmetDatoCms seo={data.home.seoMetaTags} />
        <Systems>
          Pidro, the Multiplayer Card Game
          <br />
          for{' '}
          <a href={data.home.appStoreUrl} target="_blank">
            iPhone
          </a>
          ,{' '}
          <a href={data.home.appStoreUrl} target="_blank">
            iPad{' '}
          </a>
          and{' '}
          <a href={data.home.playStoreUrl} target="_blank">
            Android
          </a>
          .
        </Systems>
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
        <Swiper>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ auto: 3000, continuous: true }}
          >
            {data &&
              data.home.screenshots &&
              data.home.screenshots.map(s => <img key={s.url} src={s.url} />)}
          </ReactSwipe>
        </Swiper>
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
          <p>Oneapps &copy; 2016-2019</p>
          <p>
            <a href="/privacy">Privacy Policy</a>{` - `}<a href="/terms-of-use">Terms of Use</a>
          </p>
        </Copyright>
      </Layout>
    )}
  />
)

export default IndexPage
