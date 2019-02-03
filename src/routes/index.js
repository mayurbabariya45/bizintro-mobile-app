import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthContainer from "../containers/AuthContainer/AuthContainer";
import BottomTabNavigation from "./bottomTabs";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";
import IntroSentContainer from "../containers/IntroSentContainer/IntroSentContainer";
import LocationSearch from "../containers/LocationSearchContainer/LocationSearchContainer";
export default createAppContainer(createSwitchNavigator({
    Login: { screen: AuthContainer },
    EventSuccess: { screen: ProfileContainer},
    IntroSent: { screen: IntroSentContainer},
    LocationSearch: {screen: LocationSearch}, 
    Home: { screen: BottomTabNavigation }
}));