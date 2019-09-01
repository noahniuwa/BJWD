import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image/withIEPolyfill"



export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="container grid">
        <div className="section is-paddingless-horizontal">
          <h1 className="title is-2 has-text-black">
            {post.frontmatter.title}
          </h1>
          <div className="box">
            <Img 
              fluid={post.frontmatter.featuredimage.childImageSharp.fluid} 
              objectFit="cover"
            />
          </div>
          <div className="content section">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slugX: String!) {
    markdownRemark(fields: { slug: { eq: $slugX } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY, h:mm a")
        featuredimage {
          childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
        }
      }
    }
  }
`