import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from "native-base";
import ScrollView from "../ScrollView";
import FlatList from "../FlatList";
import Items from "../Contacts/Items";
import AddButton from '../../components/Button/AddButton';
import thumbnailStyle from '../../styles/thumbnailStyle';

export default class TemplateContacts extends Component {
  render() {
    const { 
        children, styleContainer, style, titleStyle,
        contactTitle, scrollViewContainer, flatListContainer, items, 
        isSecondaryContacts } = this.props;
    return (
      <View style={styleContainer}>
        <Text style={titleStyle}>{contactTitle}</Text>
        <ScrollView contentContainerStyle={scrollViewContainer} >
          <FlatList 
              style={flatListContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={items}
              extraData={items}
              keyExtractor={(value , key) => key.toString()}
              renderItem={(item) => {
                const { thumbType } = item.item;
                if(thumbType){
                  return (
                    <AddButton 
                      styleContainer={[styles.addButtonContainer, thumbnailStyle]}
                      iconStyle={styles.addIcon}
                    />
                  )
                }
                return (
                  <Items 
                    item={item} avatar 
                    thumbnailContainerStyle={styles.thumbnailContainer} 
                    isSecondaryContacts={isSecondaryContacts}
                  />
                )
              }}
          />
          
        </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  addButtonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 50,
    marginLeft: 10,
    borderColor: "#cbc9d5",
},
addIcon: {
    color: "#cbc9d5",
    fontSize: 20,
},
})
