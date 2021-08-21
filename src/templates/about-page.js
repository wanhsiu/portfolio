import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { About } from '../components/About';

import { Layout } from '../components/Layout/Layout';

const AboutPageTemplate = ({data}) => {
    const { description } = data.edges[0].node.frontmatter;
    return <Layout>
        <About description={description}/>
    </Layout>
};

export default () => (
    <StaticQuery
      query={graphql`
      query ABOUT_INDEX_QUERY {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/about*"}}}) {
        edges {
            node {
            id
            frontmatter {
                description
            }
            }
        }
        }
    }
    `}
    render={({allMarkdownRemark}) => <AboutPageTemplate data={allMarkdownRemark} />}
    />
  )
