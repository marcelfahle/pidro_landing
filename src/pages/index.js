import React from 'react'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StaticQuery, graphql } from 'gatsby'
import Link, { withPrefix } from 'gatsby-link'

import Layout from '../components/layout'
import phone from './../images/phone-mock.png'
import appStoreLogo from './../images/badge-appstore.png'
import playStoreLogo from './../images/badge-playstore.png'
import './../components/devices.min.css'

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
    render={(data) => {
      return (
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
          <div class="temp-wrapper temp-wrapper--wider ">
            <div class="px px--ls">
              <div class="px__body">
                <div class="px__body__cut"></div>
                <div class="px__body__speaker"></div>
                <div class="px__body__sensor"></div>

                <div class="px__body__mute"></div>
                <div class="px__body__up"></div>
                <div class="px__body__down"></div>
                <div class="px__body__right"></div>
              </div>

              <div class="px__screen">
                <div class="px__screen__">
                  <div class="px__screen__frame">
                    <ReactSwipe
                      className="carousel"
                      swipeOptions={{ auto: 3000, continuous: true }}
                    >
                      {data &&
                        data.home.screenshots &&
                        data.home.screenshots.map((s) => (
                          <img key={s.url} src={s.url} />
                        ))}
                    </ReactSwipe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )
    }}
  />
)

export default IndexPage
