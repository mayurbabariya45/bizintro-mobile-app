import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlatList from "../FlatList";
import Items from "./CardItems";

const CardScroll = ({ items, }) => {
    return (
        <View style={styles.scrollViewContainer}>
            <FlatList 
                style={styles.flatListContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                extraData={items}
                keyExtractor={(value , key) => key.toString()}
                renderItem={(item) => <Items item={item.item} transparent />}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexWrap: "nowrap",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 5,
        flex: 0.7,
    },
    flatListContainer:{
        flex: 1,
    }
});


export default CardScroll;
