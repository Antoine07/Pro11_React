import styled from 'styled-components';

const Presentation = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.color ?? 'black'};
`;

export default Presentation;