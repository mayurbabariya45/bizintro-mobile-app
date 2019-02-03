import React from 'react';
import { View, Dimensions } from 'react-native';
import getScreenSize from '../../util/ScreenSize';
import Button from '../Button/Button';
import { Thumbnail } from "native-base";

const { height } = Dimensions.get("window");
let deviceScreen = getScreenSize(height);

//let thumbnailSize = !isLargeDevice ? {height: 45, width: 45} : {height: 60, width: 60}

let thumbnailSize  = deviceScreen === "isVerySmall" ? {height: 40, width: 40} : deviceScreen === "isSmall" 
    ? {height: 45, width: 45} : deviceScreen === "isMedium" ? 
    {height: 50, width: 50} : {height: 60, width: 60};

const ButtonThumbnail = ({item, handleMarker, ...props}) => {
    return (
        <Button onPress={() => {handleMarker(item)}} onLongPress={() => {handleMarker(item)}}>
            <Thumbnail source={{ uri: `${item.imageSrc}` }} {...props} style={[thumbnailSize, {backgroundColor: "#eee"}]} />
        </Button>
    )
};

export default ButtonThumbnail;
