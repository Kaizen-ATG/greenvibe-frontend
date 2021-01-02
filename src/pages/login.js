import React from "react"
import Login from "../components/layout/form"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function LoginPage() {
  return (
    <Layout>
      <SEO title="Login" />
      <Login />
    </Layout>
  )
}

export default LoginPage
