import React from 'react';
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout/Layout';
import { ProjectDetails } from '../components/ProjectDetail/ProjectDetail';

const Project = ({ data }) => {
    const projectData = data.markdownRemark.frontmatter;

    return (
        <Layout key={data.markdownRemark.id}>
            <ProjectDetails data={projectData} />
        </Layout>
    )
}

export default Project;

export const projectQuery = graphql`
    query PROJECTS_BY_ID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                date
                projectDate
                description
                details
                vimeoId
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
`;