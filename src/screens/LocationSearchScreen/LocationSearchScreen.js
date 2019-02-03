import React, { Component } from 'react';
import { StyleSheet, ScrollView, NativeModules } from 'react-native';
import { Container, Icon } from "native-base";
import Header from "../../components/Header/CustomHeader";
import Button from '../../components/Button/Button';
import HeaderInput from '../../components/Header/HeaderInput';
import ContactList from '../../components/Contacts/ContactList';

const { StatusBarManager } = NativeModules;
const image1 = require('../../../assets/fork.png')
const image2 = require('../../../assets/clock.png')
const image3 = require('../../../assets/bag.png')

const items = [
  {
    image: image1,
    name: "Samsons Deli",
    desc: "1 Mile Away"
  },
  {
    image: image2,
    name: "Northlake Hotel",
    desc: "1.1 Miles Away"
  },
  {
    image: image1,
    name: "Starbucks",
    desc: "1.2 Mile Away"
  },
  {
    image: image3,
    name: "Mortar Workplace Co.",
    desc: "2 Miles Away"
  },
  {
    image: image3,
    name: "Mortar Workplace Lounge",
    desc: "2 Miles Away"
  },
  {
    image: image1,
    name: "Familio's Diner",
    desc: "1 Miles Away"
  },
  {
    image: image1,
    name: "Familio's Diner",
    desc: "1 Miles Away"
  },
  {
    image: image1,
    name: "Familio's Diner",
    desc: "1 Miles Away"
  },
];

class LocationSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header
            transparent
            showLeft
            showCenter
            leftComponent={
              <Button styleContainer={styles.leftButtonContainer} onPress={() => this.props.navigation.navigate('Search')}>
                <Icon type="MaterialCommunityIcons" name="arrow-left" style={styles.headerLeftIcon}/>  
              </Button>
            }
            bodyComponent={
              <HeaderInput 
                {...this.props}
                styleContainer={styles.headerBodyContainer}
                inputPlaceholder="Oakbrook, IL"
                tagPlaceHolder="Categories     All meeting places"
              />
            }
            styleContainer={styles.headerContainer}
            leftContainer={styles.leftContainer}
            bodyContainer={styles.bodyContainer}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.contactListContainer}
        >
          <ContactList items={items} locationSearch styleContainer={styles.contactList} isLocationSearch/>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  headerContainer: {
    elevation: 1000,
    backgroundColor: "#fff", 
    height: 125,
  },
  headerBodyContainer: {
    width: "100%",
  },
  leftContainer: {
    flex: 0.1,
    height: "100%",
    paddingTop: 12,
  },
  bodyContainer: {
    flex: 0.9,
  },
  leftButtonContainer: {
    paddingLeft: 0,
  },
  headerLeftIcon: {
    color: "#cbc9d5"
  },
  contactListContainer: {
    backgroundColor: "#f9f9fa",
  },
  contactList: {
    paddingTop: 20,
  }
});

export default LocationSearchScreen;
