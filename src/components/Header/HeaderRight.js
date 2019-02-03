import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Thumbnail, Button } from "native-base";

const HeaderRight = () => {
    return (
        <Right>
            <View style={styles.plusContainer}>
                <Button transparent>
                    <Icon name='add' style={styles.iconSize}/>
                </Button>
            </View>
            <Thumbnail style={styles.thumbnail} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}/>
        </Right>
    );
};

const styles = StyleSheet.create({
    plusContainer: {
        justifyContent: 'space-around',
        paddingRight:10
    },
    thumbnail: {
        height: 50,
        width: 50,
    },
    iconSize:{
        fontSize: 35,
        color: "#bcbcbe"
    }
});

export default HeaderRight;
