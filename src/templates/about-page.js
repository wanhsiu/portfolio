import { graphql } from 'gatsby';
import React from 'react';
import { About } from '../components/About';

import { Layout } from '../components/Layout/Layout';

const AboutPageTemplate = ({pageResources}) => {
    const { title, description } = pageResources.json.data.markdownRemark.frontmatter;
    return <Layout>
        <About description={description}/>
    </Layout>
};

export default AboutPageTemplate;


export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`;