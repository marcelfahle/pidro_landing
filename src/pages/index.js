import React from 'react'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

import appStoreLogo from './../images/badge-appstore.png'
import playStoreLogo from './../images/badge-playstore.png'

const Systems = styled.h2`
  color: white;
  text-align: center;
`

const Badges = styled.div`
	display: table;
	margin: 0 auto;
  ul {
    list-style: none;
    margin: 0;
    padding-top: 20px;
    li {
      display: inline-block;
      width: 50%;
      max-width: 130px;
      img {
				max-width 100%;
        max-height: 60px;
      }

    }
  }
`

const Swiper = styled.div`
  margin-top: 30px;
`

const IndexPage = ({ data }) => (
  <div>
    <Systems>
      Pidro, the Multiplayer Card Game<br />
      for{' '}
      <a href={data.home.appStoreUrl} target="_blank">
        iPhone
      </a>,{' '}
      <a href={data.home.appStoreUrl} target="_blank">
        iPad{' '}
      </a>
      and{' '}
      <a href={data.home.playStoreUrl} target="_blank">
        Android
      </a>.
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
          data.home.screenshots.map(s => <img src={s.url} />)}
      </ReactSwipe>
    </Swiper>
  </div>
)

export default IndexPage

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      intro
      appStoreUrl
      playStoreUrl
      screenshots {
        url
      }
    }
  }
`
