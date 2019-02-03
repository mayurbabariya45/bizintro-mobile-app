import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text, Icon, Right } from 'native-base';
import { Marker } from 'react-native-maps';
import Button from '../../components/Button/Button';

const CustomMarker = ({image, item, latlon}) => (
    <Marker
      coordinate={latlon}
    >
      <View style={styles.customMarkerContainer}>
        <View style={styles.markerImageContainer}>
          <Image source={image} style={styles.customMarkerImage} />
        </View>
        <View style={styles.markerCardContainer}>
          <Button>
            <Card transparent style={styles.markerCard}>
              <CardItem style={styles.markerItem}>
                <Body style={{flex: 8}}>
                  <Text style={styles.markerText} numberOfLines={1}>
                    {item.location}
                  </Text>
                </Body>
                <Right style={{flex: 2}}>
                  <Icon type="MaterialIcons" name="keyboard-arrow-right" style={styles.rightIcon}/>
                </Right>
              </CardItem>
            </Card>
          </Button>
        </View>
      </View>
    </Marker>
);

CustomMarker.defaultProps = {
  image: "",
  latlon: {},
  title: "",
  subtitle: ""
}

const styles = StyleSheet.create({
  customMarkerContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  customMarkerImage: {
    width: 65, 
    height: 65,
  },
  markerImageContainer: {
    flex: 1
  },
  markerCardContainer: {
    flex :1
  },
  markerCard :{
    flex: 1,
  },
  markerItem: {
    borderRadius: 7,
    width: 160,
  },
  markerText: {
    color: "#96c3cf",
    fontSize: 17,
  },
  rightIcon: {
    color: "#96c3cf",
    fontSize: 25,
  }
});

export default CustomMarker;
