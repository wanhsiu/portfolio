import styled from '@emotion/styled';

export const Table = styled.table`
    width: 100%;
    table-layout: auto;
`;

export const TableRow = styled.tr`
    margin-bottom: 20px;
`;

export const TableHeader = styled.th`
    text-align: left;
    padding: 10px;
`;

export const TableCell = styled.td`
    text-align: ${props => props.position ? props.position : 'left'};
    padding: 10px;
`;

export const Circle = styled.span`
    height: 15px;
    width: 15px;
    background-color: #000;
    border-radius: 50%;
    display: inline-block;
`;