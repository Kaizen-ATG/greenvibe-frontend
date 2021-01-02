import React from "react"
import styled from "styled-components"
import { H1, SmallText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function ProfileSection(props) {
  return (
    <ProfileWrapper>
      <PlayerGroup>
        <SectionText>{props.text}</SectionText>
        <PlayerAvatar src="/images/avatars/avatar01.svg" />
        <PlayerPoints>
          <Greenli>{props.gpoints}</Greenli>
          <Carbonli>{props.cpoints}</Carbonli>
        </PlayerPoints>
        <Note>{props.note}</Note>
        <PlayerWeekPoints>
          <GreenWeekPoints>
            {props.greenweekpoints}
            <Descgreen>Green</Descgreen>
          </GreenWeekPoints>
          <CarbonWeekPoints>
            {props.carbonweekpoints}
            <Descarb>Carbon free</Descarb>
          </CarbonWeekPoints>
        </PlayerWeekPoints>
      </PlayerGroup>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  background: grey;
  margin: 200px 0px 60px;
  background: url("/images/waves/hero-wave01.svg");
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    margin: 100px 0px 160px;
    height: 200px;
  }
`
const PlayerGroup = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`
const PlayerAvatar = styled.img`
  height: 120px;
  width: 120px;
  background: #f2f2f2;
  border-radius: 50%;
  justify-self: center;
  margin: 24px 0 0;

  @media (max-width: 640px) {
    height: 90px;
    width: 90px;
  }
`
const PlayerPoints = styled.div`
  margin: 12px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  border: 1px solid black;
  padding: 4px;
  border-radius: 16px;
  max-width: 80px;
  justify-self: center;
`
const Greenli = styled.div`
  margin: 0 0 0 4px;
  font-size: 13px;
  font-weight: 800;
  color: #785399;
  align-self: center;
  justify-self: center;
`

const Descgreen = styled(SmallText)`
  color: ${themes.light.text2};
`

const Descarb = styled(SmallText)`
  color: ${themes.light.text2};
`

const Carbonli = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #785399;
  align-self: center;
  justify-self: center;
`
const Note = styled.p`
  margin-top: 32px;
  font-size: 13px;
  color: #555;
  align-self: center;
  justify-self: center;
`

const PlayerWeekPoints = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: 100px 100px;
  justify-items: center;
  @media (max-width: 640px) {
  }
`
const GreenWeekPoints = styled.h3`
  padding: 8px;
  font-size: 40px;
  color: #785399;
  font-weight: 800;
  justify-items: center;
`

const CarbonWeekPoints = styled.h3`
  padding: 8px;
  font-size: 40px;
  color: #999;
  font-weight: 800;
`

const SectionText = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`
