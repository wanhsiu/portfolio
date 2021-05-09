import styled from '@emotion/styled';

const margin = '50px';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.counter ? `hsl(${props.counter}, 25%, 65%)` : null};
    font-size: .75rem;
    @media (min-width: 500px) {
        font-size: 1.5rem;
    }
    @media (min-width: 678px) {
        font-size: 2rem;
    }
`;

export const Name = styled.div`
    position: absolute;
    padding: ${margin} 0 0 ${margin};
`;

export const Time = styled.div`
    position: absolute;
    right: 0;
    padding: ${margin} ${margin} 0 0;
`;

export const UnderConstructionMessage = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0 0 ${margin} ${margin};
    width: 150px;
    @media (min-width: 500px) {
        width: 300px;
    }
    @media (min-width: 1000px) {
        width: auto;
    }
`;

export const Contact = styled.div`
    position: absolute;
    bottom: 0;
    right: ${margin};
    padding: 0 ${margin} ${margin} 0;

    a {
        color: lightgreen;
        :hover {
            opacity: 80%;
            transition: opacity ease-in 250ms;
        }
    }
`;