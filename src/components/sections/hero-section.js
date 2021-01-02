import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import SecondaryButton from "../buttons/secondary-button"
import PrimaryButton from "../buttons/primary-button"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Do your <br />
            bit for a greener globe, while earning rewards
          </Title>
          <Description>
            For people who want to drive change and make a difference with
            helping save the environment.
          </Description>
          <ButtonSection>
            <PrimaryButton title="Join Us" />
            <SecondaryButton title="Sign In" />
          </ButtonSection>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  /*background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);*/
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px 120px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 60px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.light.text1};

  @media (max-width: 450px) {
  }
`
const ButtonSection = styled.div`
  max-width: 360px;
  display: grid;
  grid-template-columns: 180px auto;

  @media (max-width: 450px) {
    grid-template-columns: 180px auto;
  }
`

const Description = styled(MediumText)`
  color: ${themes.light.text1};
`
