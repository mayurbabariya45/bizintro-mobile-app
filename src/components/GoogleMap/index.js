import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Marker from "./MarkerItem";
import CustomMarker from './CustomMarker';

const GoogleMap = ({items, zoomEnabled, isHome, markerImage, maxZoomLevel, 
    showsCompass, defaultRegion, changedRegion, customMapStyle, ...props}) => {    
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapView}
                zoomEnabled={zoomEnabled}
                showsCompass={showsCompass}
                region={changedRegion}
                initialRegion={defaultRegion}
                customMapStyle= {customMapStyle}
                showsUserLocation
                maxZoomLevel= {maxZoomLevel}
            >
            { items &&
                items.map((item, key) => (
                    isHome ? 
                            <Marker 
                                {...item} 
                                image={item.imageSrc}
                                key={key}
                            />
                        : 
                            <CustomMarker 
                                {...item} 
                                image={markerImage}
                                key={key}
                                item={item}
                            />
                    )
                )
            }
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default GoogleMap;
