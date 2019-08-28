import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div className="container grid">
      <div className="section is-paddingless-horizontal">
        <h1 className="title is-2 has-text-black">
          Contact 
        </h1>
        
        <div className="card">
          <div className="card-content">
            <div className="content">
            <p><span className="contactItem">Phone: </span>888-8888-8888</p>
            <p><span className="contactItem">Email: </span>888-8888-8888</p>

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