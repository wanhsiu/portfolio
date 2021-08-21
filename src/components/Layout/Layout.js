import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { Global, css } from '@emotion/react';

import useSiteMetadata from '../SiteMetadata'
import * as S from './Layout.styles';
import useTimeCfg from '../useTimeCfg';
require('normalize.css')

export const Layout = ({ children }) => {
    const { title, description, keywords } = useSiteMetadata();
    const [ counter, setCounter ] = useState(500);
    const { backgroundColor, invertBaseColor, circleColor } = useTimeCfg();

    const handleOnMouseMove = (e) => {
        const nextCounter = counter + 0.25;
        setCounter(nextCounter);
    }

    return (
            <S.Container backgroundColor={backgroundColor} onMouseMove={handleOnMouseMove}>
            <Global
                styles={css`
                @font-face {
                    font-family: 'Telegraf';
                    src: url('/fonts/Telegraf-Regular.eot');
                    src: url('/fonts/Telegraf-Regular.eot?#iefix') format('embedded-opentype'),
                        url('/fonts/Telegraf-Regular.woff2') format('woff2'),
                        url('/fonts/Telegraf-Regular.woff') format('woff'),
                        url('/fonts/Telegraf-Regular.ttf') format('truetype'),
                        url('/fonts/Telegraf-Regular.svg#Telegraf-Regular') format('svg');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }
                
                html, body {
                    width: 100vw;
                    height: 100vh;
                    color: ${invertBaseColor ? '#fff' : '#000'} !important;
                }

                body {
                    font-family: 'Telegraf', sans-serif;
                }

                a {
                    color: ${invertBaseColor ? '#fff' : '#000'} !important;
                    :hover {
                        color: ${circleColor} !important;
                    }
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
            <S.StyledHeader backgroundColor={backgroundColor}/>
            <S.Content>
                {children}
            </S.Content>
            <S.StyledFooter backgroundColor={backgroundColor}/>
        </S.Container>
     )
};