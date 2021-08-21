import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { ProjectList } from '../components/ProjectList/ProjectList';

const IndexPageTemplate = ({ data }) => {
  const { edges: projectsData } = data;
  return (
    <Layout>
        <ProjectList projects={projectsData} />
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
    query PROJECTS_QUERY {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/projects/*"}}}) {
        edges {
            node {
            id
            fields {
                slug
            }
            frontmatter {
                title
                date
                projectDate
                description
                details
                images {
                  alt
                  src {
                      id
                      extension
                      publicURL
                      childImageSharp {
                          fluid(maxWidth: 2048, quality: 100) {
                              src
                              srcSetWebp
                          }
                      }
                  }
                }
                categories {
                category
                }
            }
            }
        }
        }
    }
  `}
  render={({allMarkdownRemark}) => <IndexPageTemplate data={allMarkdownRemark} />}
  />
)