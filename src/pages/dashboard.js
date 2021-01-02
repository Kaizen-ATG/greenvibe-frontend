import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import staticdata from "../../staticdata.json"
import Cell from "../components/common/cell"
import styled from "styled-components"
import ProfileSection from "../components/sections/profile-section"

function SecondPage() {
  return (
    <Layout>
      <SEO title="Dashboard" />
      <ProfileSection
        gpoints="60"
        cpoints="80"
        text="Hello Stephany"
        note="Here’s a look at your score this week"
        greenweekpoints="10"
        carbonweekpoints="20"
      />
      <SectionCaption>Leaderboard</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell
            title={cell.title}
            image={cell.image}
            gpoints={cell.greenpoints}
            cpoints={cell.carbonpoints}
          />
        ))}
      </SectionCellGroup>
    </Layout>
  )
}

export default SecondPage

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto 24px;

  @media (max-width: 640px) {
  }
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
`
