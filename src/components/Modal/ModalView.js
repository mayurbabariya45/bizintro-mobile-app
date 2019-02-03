import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Container, View, Text, Icon, Item, Label } from "native-base";
import Switch from 'react-native-switch-pro'

import ScrollView from "../ScrollView";
import FlatList from "../FlatList";
import Items from "../Contacts/Items";
import Button from '../Button/Button';
import Header from "../Header/CustomHeader";
import Card from '../Card/CardBox';
import getScreenSize from '../../util/ScreenSize';

const { height, width } = Dimensions.get("window");
const deviceSize = getScreenSize(height);

const items = [
  {
    imageSrc: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png"
  },  
];

export default class ModalViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swithValue: false
    }
    this.handleSaveButton = this.handleSaveButton.bind(this);
  }
  handleSaveButton(){
    this.props.navigation.navigate
  }
  render() {
    const { onPress } = this.props;
    const { swithValue } = this.state;
    return (
      <Container style={styles.container}>
        <Header
          transparent
          androidStatusBarColor="#fff"
          iosBarStyle="dark-content"
          showLeft
          showRight
          styleContainer={{paddingBottom: 25}}
          leftComponent={
            <Button onPress={onPress}>
              <Icon 
                type="MaterialCommunityIcons" 
                name="close" 
                style={{color: "#cbc9d5"}}
                iconStyle={styles.iconSize}
              />
            </Button>  
          }
          rightComponent={
            <Button 
              label="Save"
              onPress={() => this.props.navigation.navigate('EventSuccess')}
              style={{color: "#3c5468", fontSize: 18}}
            />
          }
        />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.titleText}>
              <Text style={styles.selectedContactText}>Selected Contact</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} >
              <FlatList 
                  style={styles.flatListContainer}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={items}
                  extraData={items}
                  keyExtractor={(value , key) => key.toString()}
                  renderItem={(item) => <Items item={item} avatar thumbnailContainerStyle={styles.thumbnailContainer} isModal={true} />}
                />
            </ScrollView>
            <View style={styles.cardContainer}>
              <Card text="Quick Coffee Chat" style={styles.eventTitle}/>
              <Card text="1 hour" style={{fontSize: 20}} styleContainer={styles.timeCard}/>
            </View>
            <View style={styles.squareCardContainer}>
              <Card isCardSquare styleContainer={styles.cardBox} name="From" date="Nov 17" time="11:30am" cardStyle={styles.cardStyle}/>
              <Icon 
                type="MaterialCommunityIcons" 
                name="arrow-right" 
                style={styles.arrowRight}
                iconStyle={styles.iconSize}
              />
              <Card isCardSquare styleContainer={styles.cardBox} name="To" date="Nov 17" time="12:30am" cardStyle={styles.cardStyle}/>
            </View>
            <View style={styles.descriptionContainer}>
              <Card text="Let’s chat quickly about the chances of partnering on the green project." style={styles.desc}/>
              <Card text="Starbucks Oakbrook, IL" style={styles.desc} styleContainer={styles.timeCard}/>
            </View>
            <View style={styles.locationSearchContainer}>
              <Item style={styles.locationSearchItem}>
                <View style={styles.locationSearchTitle}>
                  <Label style={styles.locationlable}>Location Search</Label>
                  <Switch
                    value={swithValue}
                    onAsyncPress={(callback) => { this.setState({ swithValue: !swithValue})}}
                  />
                </View>
                <View style={styles.locationSearchNote}>
                  <Text style={styles.noteText}>
                    Let us do the hard work.Let’s face it coffee is coffee,
                    it’s all about the perfect enviornment.
                  </Text>
                </View>
              </Item>
            </View>
          </ScrollView>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  iconSize: {
      fontSize: 35
  },
  contactContainer: {
    flex :1,
  },
  scrollViewContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingRight: 7
  },
  flatListContainer:{
      flex: 1
  },
  titleText: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 22
  },
  selectedContactText: {
      color: "#cbc9d5",
      fontSize: 17
  },
  cardContainer: {
    flex :1,
    paddingTop: 20
  },
  timeCard: {
    paddingTop: 10
  },
  squareCardContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 10
  },
  cardBox: {
    flex: 4
  },
  eventTitle: {
    fontSize: deviceSize === "isVerySmall" ? 20 : 30
  },
  cardStyle: {
    height: 130
  },
  arrowRight: {
    color: "#cbc9d5", 
    alignSelf: 'center'
  },
  descriptionContainer: {
    paddingTop: 10
  },
  desc: {
    fontSize: 18
  },
  locationSearchContainer: {
    paddingTop: 10,
    marginBottom: 20
  },
  locationSearchItem: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
    borderColor: "#fff"
  },
  locationlable: {
    color: "#cbc9d5",
    fontSize: 17,
    fontWeight: "bold"
  },
  locationSwitch: {
    marginRight: 20
  },
  locationSearchTitle: {
    flex: 1, 
    justifyContent: "space-between", 
    flexDirection: "row",
  },
  locationSearchNote: {
    flex: 1,
    marginTop: 15,
  },
  noteText: {
    color: "#cbc9d5"
  },
});
