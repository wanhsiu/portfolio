import React, { useState, useEffect } from 'react';
import { useSiteDetails } from '../useSiteDetails';
import breakpoints from '../../constants/breakpoints';
import * as S from './Header.styles';
import useWindowDimensions from '../useWindowDimensions';

export const Header = ({className}) => {
    const { siteTitle, siteSubTitle } = useSiteDetails();
    const [date, setDate] = useState(new Date());
    const tick = () => { setDate(new Date() )};
    const { width } = useWindowDimensions();

    const Characters = () => <S.Characters>{siteSubTitle}</S.Characters>;

    const Time = () => <S.Time> {date.toLocaleTimeString()} </S.Time>;

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
        clearInterval(timerID);
        };
    })

    return (
    <S.Container className={className}>
        <S.Left>
            <S.StyledLink to="/">
                <S.Title> {siteTitle} </S.Title>
            </S.StyledLink>
            {width < breakpoints.md ? <Time/> : <Characters/>}
        </S.Left>
        <S.Right>
            {width < breakpoints.md ? <Characters/> : <Time/>}
        </S.Right>
    </S.Container>
    )
};