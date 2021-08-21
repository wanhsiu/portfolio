import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { fontSizes } from '../../constants/fontSizes';
import { mediaQueries } from '../../style/mediaQueries';

export const Container = styled.div`
    height: 80px;
    padding: 5px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    ${mediaQueries("md")`
        padding: 10px;
        height: 90px;
    `};
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const Characters = styled.div`
    font-size: ${fontSizes.lg};
    writing-mode: vertical-rl;
    text-orientation: upright;
    ${mediaQueries("md")`
        writing-mode: horizontal-tb;
        text-orientation: initial;
        font-size: 2rem;
    `};
`;

export const Title = styled.h1`
    font-size: ${fontSizes.lg};
    margin: 0;
    font-weight: normal;
    ${mediaQueries("md")`
        font-size: 2rem;
        margin-bottom: 10px;
    `};
`;

export const Time = styled.span`
    font-size: ${fontSizes.lg};
    ${mediaQueries("md")`
        font-size: 2rem;
    `};
`;

export const StyledLink = styled(Link)`
    && {
        text-decoration: none;
        color: inherit;
        :hover {
            opacity: 0.7;
        }
    }
`;