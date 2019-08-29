import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div className="container grid">
      <div className="section is-paddingless-horizontal">
        <h1 className="is-size-2 align-center">
          Contact 
        </h1>
      </div>
      <div className="section has-background-light">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <p><span className="contactItem">Wechat: </span>noahniuwa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`