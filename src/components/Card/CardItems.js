import React  from 'react';
import { StyleSheet } from 'react-native';
import { Card } from "native-base";
import CardItem from "./CardItem";

const CardItems = ({transparent, item, ...props}) => {
    return (
        <Card transparent={transparent} style={styles.container}>
            <CardItem {...item} />
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CardItems;
