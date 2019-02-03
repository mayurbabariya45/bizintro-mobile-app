import React from 'react';
import { StyleSheet } from "react-native";
import { Body, Title, Subtitle } from 'native-base';

const HeaderCenter = (title, showSubtitle, subTitle) => {
    return (
        <Body style={styles.container}>
            <Title style={styles.containerTitle}>{title}</Title>
            {showSubtitle && <Subtitle>{subTitle}</Subtitle>}
        </Body>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center", 
        alignItems: "center"
    },
    containerTitle:{
        color: "#425563",
        fontWeight: "bold",
        fontSize: 30
    }
});
export default HeaderCenter;
