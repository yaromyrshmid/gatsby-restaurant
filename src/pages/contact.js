import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={img}>
      <Banner title="Contact us" />
    </PageHeader>
  </Layout>
)

export default ContactPage
