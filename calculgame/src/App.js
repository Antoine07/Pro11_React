
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { load } from './store/actions/actions-types';

import Form from './components/Form';
import Info from './components/Info';

import Container from './Styles/Container';
import GlobalStyle from './Styles/Global';
import Grid from './Styles/Grid';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(load()); // load au départ des multiplication
  }, []);

  return (
   <Container>
     <GlobalStyle />
     <Grid>
       <Form />
     </Grid>
     <Grid>
        <Info />
     </Grid>
   </Container>
  );
};

export default App;
