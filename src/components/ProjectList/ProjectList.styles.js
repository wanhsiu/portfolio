import styled from '@emotion/styled';
import { mediaQueries } from '../../style/mediaQueries';

export const Container = styled.div``;

export const Table = styled.table`
    position: relative;
    z-index: 100;
    width: 100%;
    table-layout: auto;
    ${mediaQueries("md")`
        margin-top: 50px;
    `}
`;

export const TableRow = styled.tr`
    margin-bottom: 20px;
    cursor: pointer;
    :first-child {
        cursor: inherit;
    }
`;

export const TableHeader = styled.th`
    text-align: left;
    padding: 10px;
    font-size: 0.85rem;
    ${mediaQueries("md")`
        font-size: 1.25rem;
    `}
`;

export const TableCell = styled.td`
    text-align: ${props => props.position ? props.position : 'left'};
    padding: 10px;
    font-size: 0.85rem;
    ${mediaQueries("md")`
        font-size: 1.25rem;
    `}
`;

export const Circle = styled.span`
    height: 20px;
    width: 20px;
    background-color: ${props => props.color ? props.color : 'black'};
    border-radius: 50%;
    display: inline-block;
    ${mediaQueries("md")`
        height: 30px;
        width: 30px;
    `}
`;

export const ImageContainer = styled.div`
    position: absolute;
    z-index: 10;
    top: 40%;
    left: 50%;
    width: 500px;
    margin-top: -250px; 
    margin-left: -250px; 
`;

export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    opacity: 0.50;
`;

/*
  top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    margin-top: -250px; 
    margin-left: -250px; 
*/