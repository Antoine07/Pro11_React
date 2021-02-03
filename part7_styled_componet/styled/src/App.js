import { useReducer, useState } from "react";
import Button from "./Styles/Button";
import Presentation from "./Styles/Presentation";
import Wrapper from './Styles/Wrapper';
import Title from './Styles/Title';
import Center from './Styles/Center';
import Input from './Styles/Input';

import GlobalStyle from './Styles/Global';

import { reducer, initialState } from './reducer';

const App = () => {
  const [message, setMessage] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState);
  const { number, numbers, message : error } = state;

  const handleClick = m => {
    setMessage(m);
  }

  const reset = () => setMessage('');

  const handleChange = e => {
    const { value: number } = e.target;

    dispatch({ type: 'SET_NUMBER', number });
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({ type: 'ADD_NUMBER' });
  }

  const showNumbers = (numbers) =>{

    if(numbers.length > 0)
      return (
        <ul>
          {numbers.map((num, i) => <li key={i}>{num}</li>)}
        </ul>
      )
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {showNumbers(numbers)}
        <Title>Hello world!</Title>
        { error && (
          <p style={{color : "black"}}>{error}</p>
        )}
        <Center>
          <Button onClick={() => handleClick('Yes')} > Yes</Button>
          <Button primary onClick={() => handleClick('No')} >No </Button>
          {message && <Button secondary onClick={reset} > Reset</Button>}
        </Center>
        <Center>
          <form onSubmit={handleSubmit}>
            <Input placeholder='A integer' onChange={handleChange} value={number} />
            <Button>Add</Button>
          </form>
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
