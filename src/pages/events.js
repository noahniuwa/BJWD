import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <div className="hero">
      <div className="hero-content">
        <div className="section">
          <div className="is-size-1 align-center">
            Events
          </div>
        </div> 
      </div>
    </div>
        
    <div className="hero">
      <div className="hero-body has-background-light">
        <div className="columns is-variable is-8 posts-container is-multiline">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key= {node.id} className="column is-one-quarter card-container">
              <div className="card" key={node.id}>
                <Link to={node.fields.slug}>
                  <div className="card-image">
                    <Img fluid={node.frontmatter.featuredimage.childImageSharp.fluid} />
                  </div>
                  <div className="card-content">
                    <div className="card-header has-background-light">
                      <div className="card-header-title">
                        <p> 
                          {node.frontmatter.title}{" "}
                        </p>
                      </div>
                    </div>
                    <p>
                      <b>Posted on: </b>{node.frontmatter.date}
                    </p>
                    <p>
                      <b>Event date:</b>{node.frontmatter.event_date}
                    </p>
                    <p>{node.excerpt}</p>
                  </div>
                </Link> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            event_date(formatString: "DD MMMM, YYYY")
            featuredimage {
              childImageSharp {
              fluid(maxWidth: 500, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
  
`