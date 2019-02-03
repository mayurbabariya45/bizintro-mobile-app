import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View, CardItem, Text, Body, Icon } from 'native-base';
import Button from "../Button/Button";

const { height, width } = Dimensions.get("window");
let isLargeDevice = (height > 700) ? true : false;
let isSmallDevice = (width < 400) ? true : false;

const Component = ({ body, header }) => {
    return (
        <CardItem cardBody style={[styles.container, {flex: 1}]}>
            <Body style={styles.bodyContainer}>
                <Text note style={[styles.containerText, styles.headerColor]}>
                    {header}
                </Text>
                <Text style={[styles.containerText, styles.bodyTextColor]} numberOfLines={!isLargeDevice ? 1 : 2}>
                    {body}
                </Text>
                <View style={styles.footerContainer}>
                    <Button 
                        label="Accept"
                        style={styles.bodyTextColor}
                    />
                    <Button>
                        <Icon type="MaterialCommunityIcons" name="dots-horizontal" style={{color: "#d8d8d8"}}/>
                    </Button>
                </View>
            </Body>
        </CardItem>
    );
};


const styles = StyleSheet.create({
      container: {
        backgroundColor: "#F5F4F7",
        borderBottomLeftRadius: 8, 
        borderBottomRightRadius: 8, 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8,
        width: 165,
        marginLeft: 15
      },
      bodyContainer:{
        padding: 10
      },
      containerText: {
        paddingBottom: 5,
      },
      headerColor: {
          color: "#778699",
          fontWeight: "100"
      },
      bodyTextColor: {
        color: "#3c5467"
      },
      footerContainer: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        width: "100%",
        position: "absolute",
        bottom: 10,
        paddingLeft: 11
      }
});

export default Component;
