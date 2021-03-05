import { useSelector, useDispatch } from "react-redux";

import Form from './Form';
import Result from './Result';

import Container from '../Styles/Container';
import Grid from '../Styles/Grid';

const Yam = () => {
 
  return (
   
    <Container>
      <Grid>
        <Form />
      </Grid>
      <Grid>
         <Result />
      </Grid>
    </Container>
  )
  ;
};

export default Yam;
