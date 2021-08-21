import styled from '@emotion/styled';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { mediaQueries } from '../../style/mediaQueries';

export const Container = styled.div`
    background: ${props => props.backgroundColor};
`;

export const Content = styled.div`
    min-height: calc(100vh - 100px);
    padding-top: 80px;
    padding-bottom: 35px;
    ${mediaQueries("md")`
        padding-top: 90px;
    `}

    color: ${props => props.invertBaseColor ? '#fff' : '#000'} !important;
    a {
        color: ${props => props.invertBaseColor ? '#fff' : '#000'} !important;
        :hover {
            color: ${props => props.circleColor} !important;
        }
    }
`;

export const StyledHeader = styled(Header)`
   position: fixed;
   background: ${props => props.backgroundColor};
   z-index: 100;
`;

export const StyledFooter = styled(Footer)`
    position: fixed;
    background: ${props => props.backgroundColor};
    left: 0;
    bottom: 0;
    z-index: 100;
`;