import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import NumPad from "./NumPad";

import Box from "../Styles/Box";
import Button from "../Styles/Button";

import Presentation from "../Styles/Presentation";
import { clear, go, reload } from "../store/actions/actions-types";

const Form = () => {
  const { numbers, choice, multiplication, status, message } = useSelector(
    (state) => state.calculate
  );

  const dispatch = useDispatch();
  const [num1, num2] = multiplication;

  const handleClear = (e) => {
    dispatch(clear());
  };

  const handleGo = (e) => {
    dispatch(go());
  };

  if (status === false) {
    return (
      <Presentation color="white">
        Jeu terminé !
        <Button secondary size="200" onClick={() => dispatch(reload())}>
          Reload
        </Button>
      </Presentation>
    );
  }

  return (
    <>
      {num1 && num2 && (
        <Presentation color="white">
          Combien font {num1} X {num2} = {choice}
        </Presentation>
      )}

      {message && <Presentation color="white">{message}</Presentation>}
      
      {numbers.map((lines, i) => (
        <Box key={i}>
          {lines.map((number, i) => (
            <NumPad key={i} num={number} />
          ))}
        </Box>
      ))}

      <Button primary size="200" onClick={handleClear}>
        Clear
      </Button>
      <Button secondary size="200" onClick={handleGo} disabled={choice === ""}>
        Go {choice === "" ? "disabled" : null}
      </Button>
    </>
  );
};

export default Form;
