import * as React from 'react';
import 'react-native-gesture-handler';
import {StackNavigationOptions} from '@react-navigation/stack';
import {
  createSharedElementStackNavigator,
  SharedElementsComponentConfig,
} from 'react-navigation-shared-element';
import {NavigationParamList} from '../types/types.d';
import ContactLists from '../screens/contact-lists';
import Contact from '../screens/contact';
import Home from '../screens/home';

const options: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const SharedConfig: SharedElementsComponentConfig = (route) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.recordID}.icon`,
      animation: 'move',
    },
    {
      id: `item.${item.recordID}.title`,
      animation: 'move',
    },
  ];
};

const RootStack = createSharedElementStackNavigator<NavigationParamList>();

export default function MainNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="ContactLists" component={ContactLists} />
      <RootStack.Screen
        name="Contact"
        component={Contact}
        sharedElementsConfig={SharedConfig}
      />
    </RootStack.Navigator>
  );
}
