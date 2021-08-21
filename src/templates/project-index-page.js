import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Layout } from '../components/Layout/Layout'
import { ProjectList } from '../components/ProjectList/ProjectList';
import { projectQuery } from './project';

const ProjectIndexTemplate = ({ data }) => {
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
    query PROJECTS_INDEX_QUERY {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/projects/*"}}}) {
        edges {
            node {
            id
            fields {
                slug
            }
            html
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
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
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
  render={({allMarkdownRemark}) => <ProjectIndexTemplate data={allMarkdownRemark} />}
  />
)