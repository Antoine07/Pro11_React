import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../components/HomeScreen';
import Details from '../components/Details';
import Game from '../components/Game';
import Score from '../components/Score';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: Details,
    Game : Game,
    Score : Score
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(RootStack);