import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <div className="hero">
      <div className="hero-content">
        <div className="section">
          <div className="is-size-2 align-center">
            Events
          </div>
        </div> 
      </div>
    </div>
        
    <div className="hero">
      <div className="hero-body grid-l has-background-light">
        <div className="columns is-variable is-8 posts-container is-multiline">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key= {node.id} className="column is-half card-container">
              <div className="card" key={node.id}>
                <Link to={node.fields.slug}>
                  <div className="card-image">
                    <Img fluid={node.frontmatter.featuredimage.childImageSharp.fluid} />
                  </div>
                  <div className="card-content">
                    <div className="card-header has-background-light">
                      <div className="card-header-title">
                        <p> 
                          Event title: {node.frontmatter.title}{" "} <br />
                          Event date: {node.frontmatter.date}
                        </p>
                      </div>
                    </div>
                    
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
            date(formatString: "DD MMMM, YYYY, h:mm a")
            featuredimage {
              childImageSharp {
              fluid(maxWidth: 500, maxHeight: 300) {
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