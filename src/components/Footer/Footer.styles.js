import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { mediaQueries } from '../../style/mediaQueries';

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
    && {
        font-size: 1.25rem;
        text-decoration: none;
        color: inherit;
        :hover {
            opacity: 0.7;
        }
        ${mediaQueries("md")`
            font-size: 2rem;
        `}
    }
`;

export const ContactButton = styled.a`
    && {
        font-size: 1.25rem;
        text-decoration: none;
        color: inherit;
        :hover {
            opacity: 0.7;
        }
        ${mediaQueries("md")`
            font-size: 2rem;
        `}
    }
`;