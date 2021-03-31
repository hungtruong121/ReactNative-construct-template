import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-paper';
import { strings } from '../Locate/I18n';
import { Sizes, Colors, Images } from '../Theme';
import { Block , IconNow, IconProfile } from '../Components';
import { Screens } from '../Utils/screens';
import NowScreen from '../Containers/Now/NowScreen';
import TrendingScreen from '../Containers/Trending/TrendingScreen';
import CreatePostScreen from '../Containers/CreatePost/CreatePostScreen';
import FuntionScreen from '../Containers/Function/FuntionScreen';
import ProfileScreen from '../Containers/Profile/ProfileScreen';

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const defaultNavigationOptions = {
  header: null,
};

const NowStackNavigator = createStackNavigator(
  {
    // The main application screen is our "WelcomeScreen". Feel free to replace it with your
    // own screen and remove the example.
    [Screens.NOW]: NowScreen,
  },
  {
    initialRouteName: Screens.NOW,
    defaultNavigationOptions,
  },
)

const TrendingStackNavigator = createStackNavigator(
  {
    // The main application screen is our "WelcomeScreen". Feel free to replace it with your
    // own screen and remove the example.
    [Screens.TRENDING]: TrendingScreen,
  },
  {
    initialRouteName: Screens.TRENDING,
    defaultNavigationOptions,
  },
)

const CreatePostStackNavigator = createStackNavigator(
  {
    // The main application screen is our "WelcomeScreen". Feel free to replace it with your
    // own screen and remove the example.
    [Screens.CREATE_POST]: CreatePostScreen,
  },
  {
    initialRouteName: Screens.CREATE_POST,
    defaultNavigationOptions,
  },
)

const FunctionStackNavigator = createStackNavigator(
  {
    // The main application screen is our "WelcomeScreen". Feel free to replace it with your
    // own screen and remove the example.
    [Screens.FUNCTION]: FuntionScreen,
  },
  {
    initialRouteName: Screens.FUNCTION,
    defaultNavigationOptions,
  },
)

const ProfileStackNavigator = createStackNavigator(
  {
    // The main application screen is our "WelcomeScreen". Feel free to replace it with your
    // own screen and remove the example.
    [Screens.PROFILE]: ProfileScreen,
  },
  {
    initialRouteName: Screens.PROFILE,
    defaultNavigationOptions,
  },
)

const bottomTabNavigator = createBottomTabNavigator({
  [Screens.NOW]: {
    screen: NowStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconNow color={tintColor} focused={focused} />
        );
      }
    },
  },
  [Screens.TRENDING]: {
    screen: TrendingStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconNow color={tintColor} focused={focused} />
        );
      }
    },
  },
  [Screens.CREATE_POST]: {
    screen: CreatePostStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconNow color={tintColor} focused={focused} />
        );
      }
    },
  },
  [Screens.FUNCTION]: {
    screen: FunctionStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconNow color={tintColor} focused={focused} />
        );
      }
    },
  },
  [Screens.PROFILE]: {
    screen: ProfileStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return (
          <IconProfile color={tintColor} focused={focused} />
        );
      },
      tabBarOptions: { 
        activeBackgroundColor: Colors.accent,
        activeTintColor: Colors.white,
        showLabel: false,
      }
    },
  },
  }, {
  // defaultNavigationOptions: ({ navigation }) => {},
  tabBarOptions: {
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.gray,
    height: 120,
    showLabel: false,
  },
});

const rootStackNavigator = createStackNavigator(
  {
    // The main application screen is our "WelcomeScreen". Feel free to replace it with your
    // own screen and remove the example.
    [Screens.NOW]: bottomTabNavigator,
    // [Screens.LOGIN]: LoginScreen,
    // [Screens.SIGNUP]: SignUpScreen,
  },
  {
    initialRouteName: Screens.NOW,
    defaultNavigationOptions,
  },
)

export default createAppContainer(rootStackNavigator)
