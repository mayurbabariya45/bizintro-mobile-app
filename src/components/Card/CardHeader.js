import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardItem } from "native-base";

const CardHeader = ({ header }) => {
    return (
        <CardItem header>
            <Text>{header}</Text>
        </CardItem>
    );
};


const styles = StyleSheet.create({
    
});


export default CardHeader;
