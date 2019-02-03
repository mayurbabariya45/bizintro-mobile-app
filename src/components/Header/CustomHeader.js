import React from 'react';
import { StyleSheet } from "react-native";
import { Header, Body, Title, Subtitle, Left, Icon, Right } from "native-base";
const CustomHeader = ({ 
    transparent, 
    androidStatusBarColor, 
    iosBarStyle, 
    showLeft, 
    showCenter, 
    showRight, 
    title, 
    subTitle,
    showSubtitle,
    openDrawer,
    leftComponent,
    rightComponent,
    bodyComponent,
    styleContainer,
    leftContainer,
    bodyContainer,
    ...props }) => {
    return (
        <Header  
            transparent={transparent}
            androidStatusBarColor={androidStatusBarColor}
            iosBarStyle={iosBarStyle}
            style={[styles.headerContainer, styleContainer]}
        >
            {showLeft && 
            (
                <Left style={[styles.leftContainer, leftContainer]}>
                    {leftComponent}
                </Left>
            )}
            {showCenter &&
            (<Body style={[styles.bodyContainer, bodyContainer]}>
                {bodyComponent}
            </Body>)}
            {showRight && (
                <Right style={styles.rightContainer}>
                    {rightComponent}
                </Right>
            )}
        </Header>
        );
};
const styles = StyleSheet.create({
    leftIconSize: {
        fontSize: 35
    },
    leftContainer: {
        flex: 1, 
        justifyContent: "flex-start"
    },
    bodyContainer: {
        flex: 1,
        marginHorizontal: 0,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    rightContainer: {
        flex: 1, 
        justifyContent: "flex-end"
    },
    bodyContainerTitle:{
        color: "#425563",
        fontWeight: "bold",
        fontSize: 30
    },
    headerContainer: {
       paddingTop: 20,
    },
    flex: {
        flex: 1
    }
});
CustomHeader.defaultProps = {
    transparent: false,
    androidStatusBarColor: "#fff",
    iosBarStyle: "dark-content"
}
export default CustomHeader;
