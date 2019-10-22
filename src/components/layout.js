import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Globals/navbar/Navbar"
import Footer from "./Globals/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
