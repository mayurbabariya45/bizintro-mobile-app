
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

const MarkerItem = ({image, latlon, title, subtitle}) => {
    return (
        <Marker
            coordinate={latlon}
            title={title}
            description={subtitle}
        >
            <View style={styles.markerContainer}>
                <Image source={{uri: image}} style={styles.markerImage} />
            </View>
        </Marker>
    );
};

MarkerItem.defaultProps = {
    image: "",
    latlon: {},
    title: "",
    subtitle: ""
}
const styles = StyleSheet.create({
    markerContainer: {
        height: 35, 
        width: 35, 
        borderWidth: 1, 
        borderColor: '#fff', 
        borderRadius: 50, 
        backgroundColor: 'lightgrey', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    markerImage: {
        borderWidth: 1, 
        borderColor: '#fff', 
        borderRadius: 50,
        width: 35, 
        height: 35
    }
});

export default MarkerItem;
