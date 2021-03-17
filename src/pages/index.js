import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'
import Uni from '../images/uni.inline.svg'
import { useDarkMode } from '../contexts/Application'
import { CardBGImage, CardFade, CardNoise } from '../components/utils'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 6rem 0 0 0;
  margin-bottom: 6rem;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
    margin-bottom: 4rem;
  }
`

const StyledBodySubTitle = styled.h3`
  margin: 0rem 0rem 1rem 0rem;
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem;
  width: 100%;
  padding-top: 1rem;

  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const StyledUni = styled(Uni)`
  margin: auto;
  width: 12rem;
  height: 12rem;
  margin-top: -4px;
  margin-bottom: 2rem;
  transform: rotate(0deg);
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  /* max-width: 1200px; */
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  opacity: 0.4;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-height: 1220px;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        <CardNoise />
        <CardBGImage isDark={isDark} />
        <CardFade />
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={
          'The Trojan platform gives the user the opportunity to take trading decisions based on future transactions.'
        }
      />
      <StyledBody>
        <StyledTitle>
          <StyledUni />
          <StyledBodySubTitle>
            The Trojan platform gives the user the opportunity to take <br></br> trading decisions based on future
            transactions.
          </StyledBodySubTitle>
          <StyledBodySubTitle>
            It monitors the mempool and displays <br></br>the most possible result of each trade.
          </StyledBodySubTitle>
          <StyledItemRow>
            <Button
              style={{
                background: `linear-gradient(128.17deg, #BD00FF -14.78%, #FF1F8A 110.05%)`,
                color: 'white',
                fontSize: '20px'
              }}
              target="_blank"
              href="https://app.trojan.finance"
            >
              Launch App
            </Button>
          </StyledItemRow>
        </StyledTitle>
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage
