import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Signin from './Pages/Signin/index';
import Signup from './Pages/Signup/index';

export default createAppContainer(
  createSwitchNavigator({
    Signin,
    Signup,
  }),
);
