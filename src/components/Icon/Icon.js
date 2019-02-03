import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Icon } from 'native-base';

const IconContainer = ({ styleContainer, style, type, name, ...props }) => (
  <View style={styleContainer}>
    <Icon
      {...props} 
      type={type}
      name={name}
      style={style}
    />
</View>
);

const styles = StyleSheet.create({

});

export default IconContainer;
