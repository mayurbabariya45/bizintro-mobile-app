import React from 'react';
import { Icon } from "native-base";
import Button from '../../components/Button/Button';

const AddButton = ({ styleContainer, iconStyle, ...props}) => (
  <Button styleContainer={[styleContainer, {justifyContent: "center"}]}>
    <Icon type="MaterialIcons" name="add" style={iconStyle} />
  </Button>
);

export default AddButton;
