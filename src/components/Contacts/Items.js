
import React from 'react';
import List from "../ListItem/List";
import ListItem from "../ListItem/ListItem";
import Thumbnail from "../ListItem/Thumbnail";
import ButtonThumbnail from '../ListItem/ButtonThumbnail';

const Items = ({
    item, thumbnailContainerStyle, isLargeDevice, isButtonThumbnail,
    handleMarker, isSecondaryContacts, isModal, ...props}) => {
    return (
        <List>
            <ListItem {...props}>
                {!isButtonThumbnail ? 
                    <Thumbnail 
                        source={{ uri: `${item.item.imageSrc}` }} 
                        style={thumbnailContainerStyle} 
                        {...props} 
                        isSecondaryContacts={isSecondaryContacts}
                        isModal={isModal}
                    /> :
                    <ButtonThumbnail item={item.item} style={thumbnailContainerStyle} {...props} handleMarker={handleMarker} />
                }
               
            </ListItem>
        </List>
    );
};

export default Items;
