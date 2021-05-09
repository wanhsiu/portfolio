import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { Global, css } from '@emotion/react';

const TemplateWrapper = ({ children }) => {
  const { title, description, keywords } = useSiteMetadata()
  return (
    <div>
      <Global
        styles={css`
          @import url("https://use.typekit.net/mff0sqf.css");

          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed, 
          figure, figcaption, footer, header, hgroup, 
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure, 
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          body {
            line-height: 1;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after,
          q:before, q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          html, body {
            width: 100vw;
            height: 100vh;
          }

          body {
            font-family: acumin-pro, sans-serif;
          }
        `}
        />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
