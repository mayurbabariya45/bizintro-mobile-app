import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerItems } from "react-navigation";

const SidebarItems = (props) => {
    const items = props.items;
    return (
        <View style={styles.menuContainer}>
            <DrawerItems {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    }
});

export default SidebarItems;
