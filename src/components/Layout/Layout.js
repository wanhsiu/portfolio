import React, { Suspense, useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';

import useSiteMetadata from '../SiteMetadata'
import * as S from './Layout.styles';
import useTimeCfg from '../useTimeCfg';
import { withPrefix } from 'gatsby';
require('normalize.css')

export const Layout = ({ children }) => {
    const { title, description, keywords } = useSiteMetadata();
    const { backgroundColor, invertBaseColor, circleColor } = useTimeCfg();
    const [fontsloaded, setFontsLoaded] = useState(false);
    const isSSR = typeof window === 'undefined';

    useEffect(() => {
        if (!fontsloaded && !isSSR) {
            const WebFont = require('webfontloader')
            WebFont.load({
                custom: {
                families: ['Telegraf'],
                urls: [`${withPrefix('/')}fonts/fonts.css`]
                },
                fontactive: (familyName, fvd) => {
                    setFontsLoaded(true)
                },
                fontinactive: () => {
                    setFontsLoaded(true)
                }
            })
        }
    }, [])

    return (
        <>
            {!isSSR && fontsloaded && ( 
                <Suspense fallback={<div/>}>
                    <S.Container 
                            backgroundColor={backgroundColor}
                            invertBaseColor={invertBaseColor}
                            circleColor={circleColor}>
                        <Global
                            styles={css`
                            html, body {
                                width: 100vw;
                                height: 100vh;
                            }

                            body {
                                font-family: 'Telegraf', sans-serif;
                            }
                            `}
                            />
                        
                        <S.StyledHeader backgroundColor={backgroundColor}/>
                        <S.Content>
                            {children}
                        </S.Content>
                        <S.StyledFooter backgroundColor={backgroundColor}/>
                    </S.Container>
                </Suspense>
            )}
        </>
     )
};