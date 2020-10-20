import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Navigation = ({ headerText }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  let heading = `${data.site.siteMetadata.title} - ${headerText}`
  return (
    <div className="navigation">
      <Header
        headerText={heading}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
    </div>
  )
}

export default Navigation
