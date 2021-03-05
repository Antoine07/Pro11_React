import { useSelector, useDispatch } from "react-redux";

const Stat = () => {
  const { statistics } = useSelector((state) => state.y);

  const { yam, brelan, square, double_pair } = statistics;

  return (
    <div>
      <li>Yam : {yam}</li>
      <li>brelan : {brelan}</li>
      <li>square : {square}</li>
      <li>Double pair : {double_pair}</li>
    </div>
  );
};

export default Stat;
