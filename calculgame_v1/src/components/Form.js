import { useSelector, useDispatch } from "react-redux";
import { set_choice } from "../store/actions/actions-types";

const Form = () => {
 const {choice} = useSelector(state => state.c);
 const dispatch = useDispatch();

  const numpad = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (<div>
      <p>Combien fait : </p>
      <p>Choice : {choice} </p>
      {numpad.map((num, i) =>(
          <button style={{margin: 1}} onClick={() => dispatch(set_choice({number : num}))} key={i}>{num}</button>
      ))}
      <p><button>Go</button></p>
  </div>);
};

export default Form;
