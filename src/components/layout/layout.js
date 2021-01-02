import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
