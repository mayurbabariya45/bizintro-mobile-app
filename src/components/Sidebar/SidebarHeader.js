import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Icon, Thumbnail} from "native-base";

const SidebarHeader = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerInnerContainer}>
                <Button transparent onPress={() => navigation.closeDrawer()}>
                    <Icon name="ios-close" style={styles.headerIcon}/>
                </Button>
                <Button transparent style={styles.buttonContainer}>
                    <Thumbnail 
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                    />
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 30,
    },
    headerIcon: {
        fontSize: 45,
        color: "rgb(174, 175, 223)"
    },
});

export default SidebarHeader;
