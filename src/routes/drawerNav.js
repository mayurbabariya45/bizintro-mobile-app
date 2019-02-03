import React from "react";
import { createDrawerNavigator } from "react-navigation";
import HomeContainer from "../containers/HomeContainer/HomeContainer";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";
import SearchContainer from "../containers/SearchContainer/SearchContainer";
import SidebarContainer from "../containers/SidebarContainer/SidebarContainer";
import BottomTabNavigation from "./bottomTabs";

const drawerRoutes = {
    Home: { screen: HomeContainer },
    Search: { screen: BottomTabNavigation},
    Profile: { screen: ProfileContainer }
}
const drawerStyles = {
    headerMode: 'screen',
        contentComponent: (props) => <SidebarContainer {...props}/>,
        drawerBackgroundColor: "rgb(114, 111, 172)",
        contentOptions: {
            activeLabelStyle:{
                color:"#fff",
            },
            activeBackgroundColor: "rgba(114, 111, 172, 0)",
            itemsContainerStyle:{
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: 'center',
        },
        labelStyle:{
            fontSize: 30,
            color: "rgb(174, 175, 223)",
            //  fontFamily: 'Roboto-Light',
            paddingVertical: 0,
            fontWeight: "normal",
            margin: 10
        }
    }
}
export default createDrawerNavigator(drawerRoutes, drawerStyles)