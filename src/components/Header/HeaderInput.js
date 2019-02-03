import React from 'react';
import { StyleSheet } from "react-native";
import { View, Form, Item, Input } from 'native-base'

const HeaderInput = ({ styleContainer, inputValue, tagValue ,inputPlaceholder, tagPlaceHolder, ...props}) => {
    return (
      <View style={styleContainer}>
        <Form>
          <Item regular style={styles.itemStyle}>
            <Input placeholder={inputPlaceholder} placeholderTextColor="#3c5468"/>
          </Item>
          <Item regular style={styles.itemStyle}>
            <Input placeholder={tagPlaceHolder} placeholderTextColor="#cbc9d5"/>
          </Item>
        </Form>
      </View>
    );
};

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#f5f4f7",
    borderRadius: 10,
    height: 40,
    borderColor: "transparent",
    marginBottom: 5,
  }
});

export default HeaderInput;
