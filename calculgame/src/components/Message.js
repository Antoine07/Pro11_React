import React from "react";
import { useSelector } from "react-redux";
import  Presentation  from '../Styles/Presentation'

const Message = () => {
  const { message } = useSelector((state) => state.calculate);

  return <Presentation>{message}</Presentation>;
};

export default Message;
