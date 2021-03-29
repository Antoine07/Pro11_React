import { useSelector } from "react-redux";
import Presentation from "../Styles/Presentation";

const Info = () => {
  const { count, score } = useSelector((state) => state.calculate);
  return (
    <Presentation color="white">
      <p>Total {count }</p>
      <p>Score : {score}</p>
    </Presentation>
  );
};

export default Info;
