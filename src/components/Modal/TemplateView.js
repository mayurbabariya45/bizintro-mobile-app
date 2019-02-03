import React, { Component } from 'react'
import { StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Container, View, Icon, Item, Label } from "native-base";
import Switch from 'react-native-switch-pro'
import TemplateContacts from '../../components/Template/TemplateContacts';
import Header from "../Header/CustomHeader";
import Button from '../Button/Button';
import Tags from '../Tags/Tags';
import Card from '../Card/CardBox';
import getScreenSize from '../../util/ScreenSize';

const { height } = Dimensions.get("window");
const deviceSize = getScreenSize(height);

const primary = [
  {
    imageSrc: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
  },  
];

const secondary = [
  {
    imageSrc: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png",
  }, 
  {
    thumbType: true
  }, 
];

const tags = ["Template", "H1", "B", "I", "U", "Bio", "+Fields"];

class TemplateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swithValue: false
    }
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
          styleContainer={styles.templateHeader}
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
              label="Next"
              onPress={() => this.props.navigation.navigate('IntroSent')}
              style={{color: "#3c5468", fontSize: 18}}
            />
          }
        />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
        <View style={styles.templateContactsContainer}>
          <TemplateContacts
            styleContainer={styles.primaryContact}
            contactTitle= "Primary Contact"
            titleStyle={styles.contactTitle}
            scrollViewContainer={styles.scrollViewContainer}
            flatListContainer={styles.flatListContainer}
            items={primary}
          />
          <TemplateContacts
            styleContainer={styles.secondaryContacts}
            contactTitle= "Secondary Contacts"
            titleStyle={styles.contactTitle}
            scrollViewContainer={styles.scrollViewContainer}
            flatListContainer={styles.flatListContainer}
            items={secondary}
            isSecondaryContacts={true}
          />
        </View>
        <View style={styles.templateTagsContainer}>
            <Tags items={tags} />
        </View>
        <View style={styles.templateDescContainer}>
          <Card text="Let’s chat quickly about the chances of partnering on the green project." style={styles.templateDesc}/>
        </View>
        <View style={styles.templateDescContainer}>
          <Card text="Let’s chat quickly about the chances of partnering on the green project." style={styles.templateDesc}/>
        </View>
        <View style={styles.templateSaveContainer}>
          <Item style={styles.templateItem}>
            <View style={styles.saveContent}>
              <Label style={styles.saveTitle}>Save as Template</Label>
              <Switch
                value={swithValue}
                onAsyncPress={(callback) => { this.setState({ swithValue: !swithValue})}}
              />
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
    height: "100%",
    paddingHorizontal: 20
  },
  iconSize: {
      fontSize: 35
  },
  templateHeader: {
    paddingBottom: 25
  },
  templateContactsContainer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
  },
  primaryContact: {
    flex: 1,
  },
  secondaryContacts: {
    flex: 1,
  },
  contactTitle: {
    color: "#cbc9d5",
    paddingLeft: 15,
    fontSize: deviceSize === "isVerySmall" ? 12 : 16
  },
  scrollViewContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingLeft: 0,
  },
  flatListContainer:{
    flex: 1
  },
  templateTagsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 50
  },
  templateDescContainer: {
    paddingTop: 15,
  },
  templateDesc: {
    fontSize: 18,
  },
  templateSaveContainer: {
    flex :1,
    paddingVertical: 20,
  },
  templateItem: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
    borderColor: "#fff"
  },
  saveContent: {
    flex: 1, 
    justifyContent: "space-between", 
    flexDirection: "row",
  },
  saveTitle: {
    color: "#cbc9d5",
    fontSize: 17,
    fontWeight: "bold"
  },
})

export default TemplateView;