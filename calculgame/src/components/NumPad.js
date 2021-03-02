import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_choice } from "../store/actions/actions-types";

import Button from "../Styles/Button";

const NumPad = ({ num }) => {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.calculate);

  return (
      <Button
        primary={ num === number }
        onClick={() => dispatch(set_choice({ number: num }))}
      >
        {num}
      </Button>
  );
};

export default NumPad;
