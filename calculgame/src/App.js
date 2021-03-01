import Form from './components/Form';
import Info from './components/Info';

import Container from './Styles/Container';
import GlobalStyle from './Styles/Global';
import Grid from './Styles/Grid';

const App = () => {
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
