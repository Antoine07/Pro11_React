import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin-top : ${props => props.margin ?? '0'}px;
`;

export default Wrapper;