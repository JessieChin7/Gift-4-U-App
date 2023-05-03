import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon, { IconType } from "react-native-dynamic-vector-icons";

import { HeaderTitle, AvatarButton, BackButton } from "../components/Header";
import { TABS, SCREENS, PROFILES } from "../types";

import { HomeScreen, ProductScreen } from "../screens/home";
import { WelcomeFirst, WelcomeSecond, WelcomeThird, WelcomeFourth } from "../screens/welcome";
import { LoginHomeScreen, LoginScreen } from "../screens/login";
import { RegisterScreen, VerificationScreen, SuccessScreen } from "../screens/register";
import { ProfileScreen, AboutScreen, FriendListScreen, HistoryScreen, SettingScreen } from "../screens/profile";

import Game from "../screens/game/Game";
import SearchScreen from "../screens/search/SearchScreen";
import ShopScreen from "../screens/shop/ShopScreen";

export type NavigatorParamList = {
  Login_Home: undefined;
  Login: undefined;

  Tab_Navigator: undefined;
  Home: undefined;
  Product: undefined;
  Gift: undefined;

  Register: undefined;
  Verification: undefined;
  Success: undefined;

  Profile: undefined;
  About: undefined;
  Friend_List: undefined;
  History: undefined;
  Setting: undefined;

  // Welcome Screens
  Welcome_Second: undefined;
  Welcome_Third: undefined;
  Welcome_Fourth: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Navigation = () => {
  // TODO: localstorage for first time tutorial
  const [userToken, setUserToken] = useState('123')

  const headerOptions = { 
    headerShown: true,
    headerTitle: (props: any) => <HeaderTitle {...props} />,
    headerRight: (props: any) => <AvatarButton { ...props} />,
    headerShadowVisible: false,
  }

  const backOptions = { 
    headerLeft: (props: any) => <BackButton {...props} />,
    title: '',
    headerShadowVisible: false,
    // headerTransparent: true
  }

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route.name) {
      case TABS.HOME_TAB:
        iconName = focused ? "home" : "home-outline";
        break;
      case TABS.GIFT_TAB:
        iconName = focused ? "gift" : "gift-outline";
        break;
      case TABS.SEARCH_TAB:
        iconName = focused ? "search" : "search-outline";
        break;
      case TABS.SHOP_TAB:
        iconName = focused ? "cart" : "cart-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return (
      <Icon
        name={iconName}
        type={IconType.Ionicons}
        size={size}
        color={color}
      />
    );
  };

  const ProfileScreens = () => {
    return (
      <Stack.Navigator>
            <Stack.Screen name={PROFILES.HOME} options={backOptions}>{ProfileScreen}</Stack.Screen>
            <Stack.Screen name={PROFILES.ABOUT} options={backOptions}>{AboutScreen}</Stack.Screen>
            <Stack.Screen name={PROFILES.FRIEND_LIST} options={backOptions}>{FriendListScreen}</Stack.Screen>
            <Stack.Screen name={PROFILES.HISTORY} options={{ ...backOptions, title: '送禮與收禮紀錄' }}>{HistoryScreen}</Stack.Screen>
            <Stack.Screen name={PROFILES.SETTING} options={{ ...backOptions, title: '設定' }}>{SettingScreen}</Stack.Screen>
      </Stack.Navigator>
    )
  }

  const HomeTab = () => {
      return (
        <Stack.Navigator>
            <Stack.Screen name={SCREENS.HOME} options={headerOptions}>{HomeScreen}</Stack.Screen>
            <Stack.Screen name={SCREENS.PRODUCT} options={{ headerShown: false }}>{ProductScreen}</Stack.Screen>
            <Stack.Screen name={SCREENS.PROFILE} options={{ headerShown: false }}>{ProfileScreens}</Stack.Screen>
        </Stack.Navigator>
      );
  }

  const GiftTab = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name={SCREENS.GAME} options={headerOptions}>{Game}</Stack.Screen>
          <Stack.Screen name={SCREENS.PROFILE} options={{ headerShown: false }}>{ProfileScreens}</Stack.Screen>
      </Stack.Navigator>
    );
  }

  const SearchTab = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name={SCREENS.SEARCH} options={headerOptions}>{SearchScreen}</Stack.Screen>
          <Stack.Screen name={SCREENS.PROFILE} options={{ headerShown: false }}>{ProfileScreens}</Stack.Screen>
      </Stack.Navigator>
    );
  }

  const ShopTab = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name={SCREENS.SHOP} options={headerOptions}>{ShopScreen}</Stack.Screen>
          <Stack.Screen name={SCREENS.PROFILE} options={{ headerShown: false }}>{ProfileScreens}</Stack.Screen>
      </Stack.Navigator>
    );
  }

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: "#667080",
          tabBarInactiveTintColor: "#e8ecf4",
          tabBarShowLabel: false,
      })}
      >
        <Tab.Screen name={TABS.HOME_TAB} component={HomeTab}/>
        <Tab.Screen name={TABS.GIFT_TAB} component={GiftTab}/>
        <Tab.Screen name={TABS.SEARCH_TAB} component={SearchTab}/>
        <Tab.Screen name={TABS.SHOP_TAB} component={ShopTab}/>
      </Tab.Navigator>
    );
  };

  const StartScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.WELCOME_FIRST} options={{ title: '', headerTransparent: true, animation: "none" }}>{WelcomeFirst}</Stack.Screen>
        <Stack.Screen name={SCREENS.WELCOME_SECOND} options={{ ...backOptions, headerTransparent: true, animation: "none" }}>{WelcomeSecond}</Stack.Screen>
        <Stack.Screen name={SCREENS.WELCOME_THIRD} options={{ ...backOptions, headerTransparent: true, animation: "none" }}>{WelcomeThird}</Stack.Screen>
        <Stack.Screen name={SCREENS.WELCOME_FOURTH} options={{ ...backOptions, headerTransparent: true, animation: "none" }}>{WelcomeFourth}</Stack.Screen>
        <Stack.Screen name={SCREENS.LOGIN_HOME} options={{ headerShown: false }}>{LoginHomeScreen}</Stack.Screen>
        <Stack.Screen name={SCREENS.LOGIN} options={{ ...backOptions, headerTransparent: true }}>{LoginScreen}</Stack.Screen>
        <Stack.Screen name={SCREENS.REGISTER} options={{ ...backOptions, headerTransparent: true }}>{RegisterScreen}</Stack.Screen>
        <Stack.Screen name={SCREENS.VERIFICATION} options={{ ...backOptions, headerTransparent: true }}>{VerificationScreen}</Stack.Screen>
        <Stack.Screen name={SCREENS.SUCCESS} options={{ ...backOptions, headerTransparent: true }}>{SuccessScreen}</Stack.Screen>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
          {userToken === '' && <Stack.Screen name={SCREENS.WELCOME} options={{ headerShown: false }}>{StartScreens}</Stack.Screen>}
          <Stack.Screen name={TABS.NAVIGATOR} options={{ headerShown: false }}>{TabNavigator}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
