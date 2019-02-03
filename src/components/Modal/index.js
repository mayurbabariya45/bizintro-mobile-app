import React from 'react';
import { Modal, StyleSheet } from 'react-native';

const Component = ({children, animationType, transparent, visible, onRequestClose, styleContainer, style, ...props}) => (
    <Modal
      {...props}
      animationType={animationType}
      transparent={transparent}
      visible={visible}
      onRequestClose={onRequestClose}
    >
    {/* <ModalView navigation= {navigation} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/> */}
      {children}
    </Modal>
);

const styles = StyleSheet.create({


});

export default Component;
