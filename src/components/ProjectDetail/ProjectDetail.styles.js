import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { mediaQueries } from '../../style/mediaQueries';

export const Container = styled.section`
    margin: 10px;
    ${mediaQueries("md")`
        margin-top: 50px;
        padding: 0 50px;
    `}
`;

export const Details = styled.div`
    display: flex;
`;

export const Left = styled.div`
    padding: 0 10px;
    ${mediaQueries("md")`
        padding: 0 10px 0 0;
    `}
`;

export const Right = styled.div`
    width: 100%;
`;

export const DetailWrap = styled.div`
    margin-bottom: 20px;
`;

export const DetailTitle = styled.div`
    text-decoration: underline;
    margin-bottom: 2px;
    ${mediaQueries("md")`
        font-size: 1.25rem;
    `}
`;

export const DetailContent = styled.div`
    ${mediaQueries("md")`
        font-size: 1.25rem;
    `}
`;

export const StyledReactMarkdown = styled(ReactMarkdown)`
    p {
        margin: 0;
    }
    ${mediaQueries("md")`
        font-size: 1.25rem;
    `}
`;

export const Description = styled.div`
    margin-bottom: 20px;
`;

export const ImagesContainer = styled.div`

`;

export const VideoContainer = styled.div`
    position:relative;
    padding-top:56.25%;
    margin-bottom: 20px;
`;

export const StyledIframe = styled.iframe`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;  
    outline: none;
    border: none;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;