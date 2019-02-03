import React  from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardItem } from "native-base";

const CardFooter = ({ footer }) => {
    return (
        <CardItem footer>
            <Text>CardFooter</Text>
        </CardItem>
    );
};


const styles = StyleSheet.create({
    
});


export default CardFooter;
