import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as S from './indexPage.styles';

export const IndexPageTemplate = () => {
  const [counter, setCounter] = useState(500);
  const [date, setDate] = useState(new Date());

  const handleOnMouseMove = (e) => {
    const nextCounter = counter + 1;
    setCounter(nextCounter);
  }

  const tick = () => { setDate(new Date() )};

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
      clearInterval(timerID);
    };
  })

  return (
    <S.Container counter={counter} onMouseMove={handleOnMouseMove}>
      <S.Name>Wendie Wanhsiu Lee</S.Name>
      <S.Time>
        {date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}
      </S.Time>
      <S.UnderConstructionMessage>Hi :) This site is currently under construction</S.UnderConstructionMessage>
      <S.Contact>Contact <a href="mailto:wendie.lee4@gmail.com">here</a></S.Contact>
    </S.Container>
  )
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
