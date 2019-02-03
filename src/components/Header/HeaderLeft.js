import React from 'react';
import { StyleSheet } from "react-native";
import { Left, Icon } from 'native-base'

const HeaderLeft = ({ openDrawer}) => {
    return (
        <Left style={styles.container}>
           <Icon name="menu" color="#bcbcbe" iconStyle={styles.iconSize} onPress={() => openDrawer()}/>
        </Left>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingLeft: 0
    },
    iconSize: {
        fontSize: 35
    }
});

export default HeaderLeft;
