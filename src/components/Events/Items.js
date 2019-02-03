import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body, Icon, View } from "native-base";

const Items = ({ styleContainer, eventName, location, color, style, isLocationEvent }) => {
    return (
        <Card style={[styles.cardContainer, styleContainer, {borderStartColor: color}]}>
            <CardItem style={[styles.cardItemContainer, style]}>
                <Body>
                    <Text style={styles.cardTitle}>
                    {eventName}
                    </Text>
                    <View style={styles.cardLocationContainer}>
                    {isLocationEvent && 
                        <Icon style={styles.locationIcon} type="MaterialIcons" name="location-on"/>
                    }
                    <Text style={styles.locationText}>{location}</Text>
                    </View>
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10, 
        borderLeftWidth: 7, 
        elevation: 0,
        zIndex: 1000,
        borderWidth: 0,
    },
    cardItemContainer: {
        backgroundColor: "#fff",
    },
    cardTitle: {
        color: "#3c5468"
    },
    cardLocationContainer: {
        paddingTop: 15,
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    locationText: {
        color: "#cbc9d5",
        fontWeight: "100",
        fontSize: 18,
    },
    locationIcon: {
        color: "#cbc9d5",
        fontSize: 25
    }
});

export default Items;
