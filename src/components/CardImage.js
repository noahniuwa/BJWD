import React from "react"
import "./styles.sass"
//import "./debug.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery} from "gatsby"



export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "public/img/wechatimg516.jpeg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }`
  )
  return(
    <Img fixed={data.file.childImageSharp.fixed} />
  )
}
