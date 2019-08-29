import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import propTypes from "prop-types"



const about = ({ data }) => {
  return (
    <Layout>
      <div className="container grid">
        <div className="section is-paddingless-horizontal">
          <h1 className="is-size-2 align-center">
            About
          </h1>
        </div>
        <div className="content section has-background-light">
          <p>
            The Beijing Web Dev Group is a local community of web developers and coders who love getting together in person
            for networking and educational events. We welcome everyone as long as they have in interest in web development or coding.
            If you are interested in joining our wechat group, please add the wechat id <b>noahniuwa</b> to get added to the group. 
            You can find the latest info about events here or in the Wechat group.
          </p>
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