import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-navigation";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";
import SidebarFooter from "./SidebarFooter";

const Sidebar = props => {
    return (
        <BackgroundImage source={require("../../assets/images/background/drawer-bg.jpg")}>
            <SafeAreaView style={styles.container}>
                <SidebarHeader {...props}/>
                <SidebarItems {...props}/>
                <SidebarFooter {...props}/>
            </SafeAreaView>
        </BackgroundImage>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: 'rgba(81, 76, 146, 0.9)',
    },
});

export default Sidebar;
