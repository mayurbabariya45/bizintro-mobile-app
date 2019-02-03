import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from "native-base";

const SidebarFooter = (props) => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerInnerContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("Setting")}>
                    <Icon name="ios-cog" type="ionicon" color="rgb(174, 175, 223)" iconStyle={styles.footerIcon} />
                    <Text style={styles.footerText}>SETTINGS</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("Login")}>
                    <Icon name="ios-log-out" type="ionicon" color='rgb(174, 175, 223)' iconStyle={styles.footerIcon} />
                    <Text style={styles.footerText}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    footerInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    footerIcon: {
        fontSize: 35
    },
    footerText: {
        fontSize: 16,
        color: "#fff"
    }
});

export default SidebarFooter;
