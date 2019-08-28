import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import propTypes from "prop-types"



const about = ({ data }) => {
  return (
    <Layout>
      <div className="container grid">
        <div className="section is-paddingless-horizontal">
          <h1 className="title is-2 has-text-black">
            About {data.site.siteMetadata.title}
          </h1>
          <div className="content">
            <p>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

about.propTypes = {
  data: propTypes.object
}



export default about