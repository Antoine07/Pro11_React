import { useSelector } from "react-redux";

import Presentation from "../Styles/Presentation";

const Yam = () => {
  const { dices } = useSelector((state) => state.y);

  return (
    <Presentation color="white">
      <ul>
        {dices.map((round, i) => (
          <li key={i} >
            {round.map((d, i) => (
              <span key={i}> {d} </span>
            ))}
          </li>
        ))}
      </ul>
    </Presentation>
  );
};

export default Yam;
