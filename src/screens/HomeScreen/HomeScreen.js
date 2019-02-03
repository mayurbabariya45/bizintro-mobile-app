import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Container } from "native-base";
import Header from "../../components/Header/CustomHeader";
import UserSlider from '../../components/Contacts/Contacts';
import CardScroll from "../../components/Card";
import GoogleMap from '../../components/GoogleMap';
import getScrenSize from '../../util/ScreenSize';

const contacts = [
    {
        imageSrc: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png"
    },
    {
        imageSrc: "https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg"
    },
    {
        imageSrc: "https://banner2.kisspng.com/20180401/jeq/kisspng-tai-lopez-investor-business-adviser-entrepreneursh-entrepreneur-5ac112da1d0ea0.3948194615226027141191.jpg"
    },
    {
        imageSrc: "http://www.tomferry.com/wp-content/uploads/2017/05/tom-oracle.png"
    },
    {
        imageSrc: "https://assets.entrepreneur.com/images/misc/1494364563_Gary%20Vaynerchuk2.png"
    },
    {
        imageSrc: "https://assets.entrepreneur.com/images/misc/1485880429_Grant%20Cardone_alt.png"
    },
    {
        imageSrc: "https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png"
    },
    {
        imageSrc: "https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg"
    },
    {
        imageSrc: "https://banner2.kisspng.com/20180401/jeq/kisspng-tai-lopez-investor-business-adviser-entrepreneursh-entrepreneur-5ac112da1d0ea0.3948194615226027141191.jpg"
    },
    {
        imageSrc: "http://www.tomferry.com/wp-content/uploads/2017/05/tom-oracle.png"
    },
    {
        imageSrc: "https://assets.entrepreneur.com/images/misc/1494364563_Gary%20Vaynerchuk2.png"
    },
    {
        imageSrc: "https://assets.entrepreneur.com/images/misc/1485880429_Grant%20Cardone_alt.png"
    },
];
const cardArray = [
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro Request",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro Request",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },
    {
        header: "Intro",
        body: "From John Alberts",
        footer: "Accept"
    },
    {
        header: "Intro",
        body: "Steven P. would like to meet Bonnie R.",
        footer: "Approve"
    },

];
const markers = [
    {
      latlon: {
        latitude: 41.881832,
        longitude: -87.623177
      },
      title: 'Foo Place',
      subtitle: '1234 Foo Drive',
      imageSrc: 'https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png'
    },
    {
      latlon: {
        latitude: 41.434345,
        longitude: -87.546576
      },
      title: 'Foo Place2',
      subtitle: '1234 Foo Drive2',
      imageSrc: 'https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg'
    },
    {
      latlon: {
        latitude: 41.212121,
        longitude: -87.323232
      },
      title: 'Foo Place3',
      subtitle: '1234 Foo Drive3',
      imageSrc: 'https://banner2.kisspng.com/20180401/jeq/kisspng-tai-lopez-investor-business-adviser-entrepreneursh-entrepreneur-5ac112da1d0ea0.3948194615226027141191.jpg'
    },
    {
      latlon: {
        latitude: 41.012121,
        longitude: -87.343434
      },
      title: 'Foo Place4',
      subtitle: '1234 Foo Drive4',
      imageSrc: 'http://www.tomferry.com/wp-content/uploads/2017/05/tom-oracle.png'
    },
    {
      latlon: {
        latitude: 41.989898,
        longitude: -87.878787
      },
      title: 'Foo Place5',
      subtitle: '1234 Foo Drive5',
      imageSrc: 'https://assets.entrepreneur.com/images/misc/1494364563_Gary%20Vaynerchuk2.png'
    },
  ];

const { height } = Dimensions.get('window');
let deviceSize = getScrenSize(height);
let mapFlexStyle = deviceSize === "isVerySmall" ? {flex: 0.4} :
  (deviceSize === "isSmall" || deviceSize === "isMedium") ?  {flex: 0.6} : {flex: 0.8}
let contactFlexStyle = deviceSize === "isVerySmall" ? {flex: 0.6} :
(deviceSize === "isSmall" || deviceSize === "isMedium") ? {flex: 0.5} : {flex: 0.7}

// let mapFlexStyle = isLargeDevice ? {flex: 0.8} : {flex: 0.6}
// let contactFlexStyle = isLargeDevice ? {flex: 0.7} : {flex: 0.5}

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header 
                    transparent
                    showCenter
                    bodyContainer={styles.bodyContainer}
                    bodyComponent={
                        <View style={styles.logoContainer}>
                            <Image source={require('../../../assets/logo.png')} style={styles.logoImage}/>
                        </View>
                    }
                />
                <View style={styles.homeContainer}>
                    <View style={contactFlexStyle}>
                        <View style={styles.titleText}>
                            <Text style={styles.recentContactText}>Recent Contacts</Text>
                            <UserSlider items={contacts}/>
                            <CardScroll items={cardArray} />
                        </View>
                    </View>
                    <View style={mapFlexStyle}>
                        <GoogleMap 
                            defaultRegion={{
                                latitude: 41.881832,
                                longitude: -87.623177,
                                latitudeDelta: 2.0111,
                                longitudeDelta: 0.0150
                            }}
                            items={markers}
                            zoomEnabled= {true}
                            showsCompass={true}
                            isHome= {true}
                        />
                    </View>
                </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    logoContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoImage: {
      height: 40,
      width: 130,
      resizeMode: "contain"
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeContainer: {
        flex: 1
    },
    titleText: {
        flex: 1,
        textAlign: "left",
    },
    recentContactText: {
        color: "#cbc9d5",
        fontSize: 15,
        paddingLeft: 18
    },
    mapContainer: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default HomeScreen;
