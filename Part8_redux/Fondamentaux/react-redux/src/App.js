import { useSelector, useDispatch } from 'react-redux';

// action type pour facilité les dispatch dans le reducer
import { increment } from './actions/actions-types';

const App = () => {

  // connexion au store
  const {count} = useSelector( state => state );

  // dispatch pour les actions dans le reducer
  const dispatch = useDispatch();

  return (
    <div className="App">
     <button onClick={() => dispatch(increment(3))}>incrément</button>
     <p>{count}</p>
    </div>
  );
}

export default App;
