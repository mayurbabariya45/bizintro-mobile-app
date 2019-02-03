import React, { Component } from 'react';
import { StyleSheet, ScrollView, NativeModules } from 'react-native';
import { Container, Icon } from "native-base";
import Header from "../../components/Header/CustomHeader";
import Button from '../../components/Button/Button';
import HeaderInput from '../../components/Header/HeaderInput';
import ContactList from '../../components/Contacts/ContactList';
import Snackbar from 'react-native-snackbar';

const { StatusBarManager } = NativeModules;

const items = [
  {
    uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
    name: "Andrei Masharin",
    desc: "CEO of Mashari Ent."
  },
  {
    uri: "https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg",
    name: "Lara Madrigal",
    desc: "CEO of Blessed Tech"
  },
  {
    uri: "https://banner2.kisspng.com/20180401/jeq/kisspng-tai-lopez-investor-business-adviser-entrepreneursh-entrepreneur-5ac112da1d0ea0.3948194615226027141191.jpg",
    name: "Mariano Rasgado",
    desc: "CEO of QuickCup Co."
  },
  {
    uri: "http://www.tomferry.com/wp-content/uploads/2017/05/tom-oracle.png",
    name: "Mgbankwo Orjee",
    desc: "CEO of Bootio"
  },
  {
    uri: "https://assets.entrepreneur.com/images/misc/1494364563_Gary%20Vaynerchuk2.png",
    name: "Ohta Kin",
    desc: "CEO of Linear Systems"
  },
  {
    uri: "https://assets.entrepreneur.com/images/misc/1485880429_Grant%20Cardone_alt.png",
    name: "Peter Taylor",
    desc: "CEO of Bluesman Moving"
  },
  {
    uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
    name: "Sebastian Bennett",
    desc: "CEO of Segmented Controls Inc."
  },
  {
    uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
    name: "Sebastian Bennett",
    desc: "CEO of Segmented Controls Inc."
  },
  {
    uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
    name: "Sebastian Bennett",
    desc: "CEO of Segmented Controls Inc."
  },
  {
    uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
    name: "Sebastian Bennett",
    desc: "CEO of Segmented Controls Inc."
  },
  {
    uri: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
    name: "Sebastian Bennett",
    desc: "CEO of Segmented Controls Inc."
  },
];

class IntroSentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    Snackbar.show({
      title: 'Introduction request has been sent',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: "#96c3cf",
      action: {
        title: "close",
        color: 'green',
        onPress: () => { Snackbar.dismiss() },
      },
    });
    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header
            transparent
            showLeft
            showCenter
            leftComponent={
              <Button styleContainer={styles.leftButtonContainer} onPress={() => this.props.navigation.navigate('EventSuccess')}>
                <Icon type="MaterialCommunityIcons" name="arrow-left" style={styles.headerLeftIcon}/>  
              </Button>
            }
            bodyComponent={
              <HeaderInput 
                {...this.props}
                styleContainer={styles.headerBodyContainer}
                inputPlaceholder="Search by Title or Company"
                tagPlaceHolder="Tags      Select tags"
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
          <ContactList items={items} styleContainer={styles.contactList}/>
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

export default IntroSentScreen;
