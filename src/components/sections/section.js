import React from "react"
import styled from "styled-components"
import { H2, H3, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function PageSection(props) {
  return (
    <SectionGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SubsectionGroup>
        <SubsectionCol>
          <SubsectionTitle>{props.subtitle1}</SubsectionTitle>
          <SubsectionContent>{props.subcontent1}</SubsectionContent>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>{props.subtitle2}</SubsectionTitle>
          <SubsectionContent>{props.subcontent2}</SubsectionContent>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>{props.subtitle3}</SubsectionTitle>
          <SubsectionContent>{props.subcontent3}</SubsectionContent>
        </SubsectionCol>
      </SubsectionGroup>
    </SectionGroup>
  )
}

const SectionGroup = styled.div`
  margin: 0px 0px 60px;
  padding-left: 30px;
  background: url("/images/waves/hero-wave01.svg");
  background-size: cover;
  display: grid;
  grid-template-rows: 100px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
  }
`
const SectionTitle = styled(H2)`
  color: ${themes.light.text2};
  font-weight: 700;
  margin: 0;

  @media (max-width: 640px) {
    margin-top: 20px;
  }
`
const SubsectionGroup = styled.div`
  display: grid;
  grid-template-columns: 360px 360px 360px;

  @media (max-width: 960px) {
    grid-template-columns: 450px 450px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const SubsectionTitle = styled(H3)``

const SubsectionContent = styled(MediumText)`
  color: ${themes.light.text1};
`
const SubsectionCol = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 20px;
  padding-bottom: 60px;
`
