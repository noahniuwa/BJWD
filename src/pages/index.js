import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"


export default ({ data }) => {
  let now = Date()
  let edges = data.allMarkdownRemark.edges.filter(edge => Date.parse(edge.node.frontmatter.date) > Date.parse(now))
  //let edges = data.allMarkdownRemark.edges.filter(edge => 1)
  //console.log(edges)
  
  return (
    <Layout>
      <div className="hero">
        <div className="hero-content">
          <div className="section">
            <div className="is-size-1 align-center">
              Welcome to BJWD: 
            </div>
            <div className="center is-size-3">
              <i>Beijing Web Developers Group</i>
            </div>
          </div> 
          <div className="notice center">
          </div>
        </div>
      </div>
         
      <div className="section grid-l">
        <div className="notification is-danger">
          <div className="title is-2 align-center">Upcoming Events</div>
        </div>
      </div>
      <div className="hero grid-l">
        <div className="hero-body has-background-light">
          <div className="columns is-variable is-8 posts-container is-multiline">
            {edges.map(({ node }) => (
              <div key= {node.id} className="column is-half card-container">
                <div className="card" key={node.id}>
                  <Link to={node.fields.slug}>
                    <div className="card-image">
                      <Img 
                        fluid={node.frontmatter.featuredimage.childImageSharp.fluid}  
                      />
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
                      <br />
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
}

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