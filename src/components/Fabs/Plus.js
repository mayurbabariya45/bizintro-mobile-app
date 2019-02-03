import React from 'react';
import { StyleSheet } from 'react-native';
import { Fab, Icon } from "native-base";

const FabIcon = ({onPress}) => {
    return (
        <Fab
            active={true}
            direction="up"
            containerStyle={styles.containerStyle}
            style={styles.fabContainer}
            position="bottomRight"
            onPress={onPress}>
            <Icon type="MaterialIcons" name="add" />
        </Fab>
    );
};

const styles = StyleSheet.create({
    containerStyle: {

    },
    fabContainer: {
        backgroundColor: '#3c5468'
    },
});

export default FabIcon;
