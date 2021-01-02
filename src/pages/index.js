import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/hero-section"

import PageSection from "../components/sections/section"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />

      <PageSection
        title="How it works"
        subtitle1="Step1"
        subcontent1="some dummy text here"
        subtitle2="Step2"
        subcontent2="some dummy text here"
        subtitle3="Step3"
        subcontent3="some dummy text here"
      />
    </Layout>
  )
}

export default IndexPage
