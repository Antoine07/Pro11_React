import { useState } from "react";
import Button from "./Styles/Button";
import Presentation from "./Styles/Presentation";
import Wrapper from './Styles/Wrapper';
import Title from './Styles/Title';
import Center from './Styles/Center';

import GlobalStyle from './Styles/Global';

const App = () => {
  const [message, setMessage] = useState('');

  const handleClick = m => {
    setMessage(m);
  }

  const reset = () => setMessage('');

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Hello world!</Title>
        <Center>
          <Button onClick={() => handleClick('Yes')} > Yes</Button>
          <Button primary onClick={() => handleClick('No')} >No </Button>
          {message && <Button secondary onClick={reset} > Reset</Button>}
        </Center>
      </Wrapper>
      {message && (
        <Wrapper margin={5}>
          <Presentation color={message === 'Yes' ? 'tomato' : 'palevioletred'}>
            {message}
          </Presentation>
        </Wrapper>
      )}
    </>
  );
}

export default App;
