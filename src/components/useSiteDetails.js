import { graphql, useStaticQuery } from 'gatsby'

export const useSiteDetails = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
        query SITE_DETAILS_QUERY {
            allMarkdownRemark(filter: {fields: {slug: {eq: "/metadata/"}}}) {
            edges {
                node {
                id
                fields {
                    slug
                }
                frontmatter {
                    siteTitle
                    siteSubTitle
                    instagramHandle
                    email
                    copyrightName
                }
                }
            }
            }
        }
    `
  )
  return allMarkdownRemark.edges[0].node.frontmatter;
}
