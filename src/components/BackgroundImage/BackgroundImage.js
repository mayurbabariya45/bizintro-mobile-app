import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const BackgroundImage = (props) => {
    const { children, source } = props;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={source} style={styles.backgroundImage} />
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
});

export default BackgroundImage;
