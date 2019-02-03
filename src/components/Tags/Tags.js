import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import FlatList from '../FlatList/index';
import Button from '../Button/Button';

const renderItem = (item) => {
  return (
    <Button>
      <Text style={styles.tagStyle}>
        {item.item}
      </Text>
    </Button>
  )
}

const Tags = ({ children, items, ...props}) => (
    <FlatList 
      style={styles.flatListContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={items}
      extraData={items}
      keyExtractor={(value , key) => key.toString()}
      renderItem={renderItem}
   />
);

const styles = StyleSheet.create({
  tagStyle: {
    margin: 5,
    padding: 15,
    backgroundColor: "#f5f4f7",
    color: "#3c5468",
    borderRadius: 10,
    fontSize: 16,
  },
  flatListContainer: {
    flex :1
  }
})
export default Tags;
