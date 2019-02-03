import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

const Bubble = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerCircle}>
                <View style={styles.lineCircle}>
                    <View style={styles.iconCircle}>
                        <View style={styles.iconContainer}>
                            <Icon ios="md-checkmark" android="md-checkmark" style={styles.iconSize} />    
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 240,
        width: 240,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    containerCircle:{
        height: 235,
        width: 235,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.5)",
        borderRadius: 235,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    lineCircle:{
        height: 210,
        width: 210,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.5)",
        borderRadius: 210,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    iconCircle:{
        height: 180,
        width: 180,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 180,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        height: 150,
        width: 150,
        borderRadius: 150,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    iconSize:{
        fontSize: 80,
        color: "rgb(100, 97, 163)"
    }
});


export default Bubble;
