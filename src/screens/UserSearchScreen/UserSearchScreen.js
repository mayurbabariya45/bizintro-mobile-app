import React, { Component } from 'react';
import { StyleSheet, ScrollView, NativeModules, Dimensions } from 'react-native';
import { Container, View, Text } from "native-base";
import Header from "../../components/Header/CustomHeader";
import HeaderInput from '../../components/Header/HeaderInput';
import ContactList from '../../components/Contacts/ContactList';
import UserSearchContacts from '../../components/Contacts/Contacts';
import getScreenSize from '../../util/ScreenSize';

const { height } = Dimensions.get("window");
const deviceSize = getScreenSize(height);

const { StatusBarManager } = NativeModules;

const contacts = [
  {
    imageSrc: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png"
  },
  {
    imageSrc: "https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg"
  },
];

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


class UserSearchScreen extends Component {
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
          showCenter
          bodyComponent={
            <View style={styles.userSearchContainer}>
              <HeaderInput 
                {...this.props}
                styleContainer={styles.headerBodyContainer}
                inputPlaceholder="Coffee"
                tagPlaceHolder="Tags         All group tags"
              />
              <View style={styles.userContact}>
                <Text style={styles.title}>Selected</Text> 
                <UserSearchContacts items={contacts} styleContainer={styles.userSearchContact}/>
              </View>
            </View>
          }
          styleContainer={styles.headerContainer}
          bodyContainer={styles.bodyContainer}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.contactListContainer}
        >
          <ContactList items={items} navigation={this.props.navigation} styleContainer={styles.contactList} />
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
  userSearchContainer: {
    width: "100%", 
    flex: 1,
  },
  userSearchContact: {
    flex: 1,
    paddingLeft: 0,
  },
  userContact: {
    flex: 1,
    paddingTop: 5
  },
  title: {
    color: "#cbc9d5",
    paddingLeft: 15,
    fontWeight: "100"
  },
  headerContainer: {
    elevation: 24, 
    height: (deviceSize === "isLarge" || deviceSize === "isVeryLarge" ) ? 235 : 220,
    paddingTop: 0,
    backgroundColor: "#fff",
    padding: 0,
  },
  headerBodyContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  bodyContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingTop: 30,
  },
  contactListContainer: {
    backgroundColor: "#f9f9fa",
  },
  contactList: {
    paddingTop: 20,
  }
});

export default UserSearchScreen;
