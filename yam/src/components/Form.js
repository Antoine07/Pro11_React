import Button from "../Styles/Button";
import Input from "../Styles/Input";

import { useDispatch, useSelector } from "react-redux";
import { set_choice, generate_yam } from "../store/actions/actions-types";

const Form = () => {
  const { choice } = useSelector((state) => state.y);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(generate_yam());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(set_choice({ name, value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number round :
        <Input onChange={handleChange} value={choice} name="choice" />
      </label>
      <Button size={1}>Add</Button>
    </form>
  );
};

export default Form;
