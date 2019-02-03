import React  from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, View, Text, Icon } from "native-base";
import Button from '../Button/Button';
import thumbnailStyle from '../../styles/thumbnailStyle';

const Component = ({isSecondaryContacts, isModal, ...props}) => {
    return (
        <View style={{flexDirection: "row"}}>
            <Thumbnail {...props} style={[thumbnailStyle, {backgroundColor: "#eee"}]} />
            {(isModal || isSecondaryContacts) &&
                <View style={styles.removeIconContainer}>
                    <Button styleContainer={styles.removeButton}>
                        <Icon type="MaterialCommunityIcons" name="minus" style={styles.removeIcon}/>
                    </Button>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    removeIconContainer: {
        position: "absolute",
        bottom: -2,
        right: -2,
        borderRadius: 100,
    },
    removeButton: {
        backgroundColor: "#fff",
        elevation: 10,
        borderRadius: 100,
    },
    removeIcon: {
        color: "#cbc9d5", 
        fontSize: 20,
    }
});

export default Component;
