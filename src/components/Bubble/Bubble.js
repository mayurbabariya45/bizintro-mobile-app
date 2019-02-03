import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

const Bubble = (props) => {
    const {} = props;
    return (
        <View style={styles.container}>
            <View style={styles.thirdCircle}>
                <View style={styles.secondCircle}>
                    <View style={styles.firstCircle}>
                        <Icon ios="md-checkmark" android="md-checkmark" style={styles.iconSize} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 150,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    thirdCircle:{
        height: 235,
        width: 235,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.5)",
        borderRadius: 235,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    secondCircle:{
        height: 210,
        width: 210,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.5)",
        borderRadius: 210,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    firstCircle:{
        height: 180,
        width: 180,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 180,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    iconSize:{
        fontSize: 80,
        color: "rgb(100, 97, 163)"
    }
});

export default Bubble;
