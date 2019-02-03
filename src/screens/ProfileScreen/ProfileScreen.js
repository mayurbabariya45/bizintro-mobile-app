import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Icon, Text } from "native-base";
import Header from "../../components/Header/CustomHeader";
import Button from "../../components/Button/Button";
import Schedule from '../../components/Schedule/Schedule';
import UserSlider from '../../components/Contacts/Contacts';
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import IconContainer from '../../components/Icon/Icon';
import GoogleMap from '../../components/GoogleMap'
import Modal from '../../components/Modal/index';
import TemplateView from '../../components/Modal/TemplateView';
import customMapStyle from '../../styles/mapStyle';
import { getDelta } from '../../util/getLatLongDelta';

import getScreenSize from '../../util/ScreenSize';

const { height } = Dimensions.get("window");
const deviceSize = getScreenSize(height);
const markerImage  = require('../../assets/images/marker.png');

const contacts = [
    {
        latlon: {
            latitude: 41.881832,
            longitude: -87.623177
        },
        title: 'Foo Place',
        subtitle: '1234 Foo Drive',
        imageSrc: 'https://assets.entrepreneur.com/images/misc/1485878297_Tai%20Lopez.png',
        location: "Vegano Cafe"
    },
    {
        latlon: {
            latitude: 41.434345,
            longitude: -87.546576
        },
        title: 'Foo Place2',
        subtitle: '1234 Foo Drive2',
        imageSrc: 'https://digitalmarketer.id/wp-content/uploads/2017/02/31.jpg',
        location: "Vegano Cafe 2"
    
    },
];

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            position: {},
            defaultRegion: {
                latitude: 41.881832,
                longitude: -87.623177,
                latitudeDelta: 2.0111,
                longitudeDelta: 0.0150  
            },
            changedRegion: {
                latitude: 41.881832,
                longitude: -87.623177,
                latitudeDelta: 2.0111,
                longitudeDelta: 0.0150  
            },
            markers: []
        }
        this.handleMarker = this.handleMarker.bind(this)
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    position,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }

    handleMarker(item) {
        const data = getDelta(item.latlon, 20);
        this.setState((preState) => {
            return {
                ...preState,
                markers: [item],
                changedRegion: {
                    ...preState.changedRegion,
                    latitude: item.latlon.latitude,
                    longitude: item.latlon.longitude,
                    latitudeDelta: data.latitudeDelta,
                    longitudeDelta: data.longitudeDelta, 
                }
            }
        })
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { markers } = this.state;
        const { navigation } = this.props;
        return (
           <Container>
                <Header 
                    transparent
                    title="bizintro"
                    showCenter
                    bodyContainer={styles.bodyContainer}
                    bodyComponent={
                        <View style={styles.actionContainer}>
                            <Button onPress ={() => { this.setModalVisible(!this.state.modalVisible)}} >
                                <Text>Add</Text>
                            </Button>
                        </View>
                    }
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}
                >
                    <TemplateView navigation={navigation} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
                </Modal>
                <Content contentContainerStyle={styles.container} bounces={false}>
                    <View style={styles.requestContainer}>
                        <Text style={styles.meetingTitle}>Meeting Request Sent!</Text>
                        <Text style={styles.meetingDesc}>
                            QuickCoffee Chat - Let’s chat quickly about the chances of partnering on the green project.
                        </Text>
                        <View style={styles.scheduleContainer}>
                            <Schedule name="From" date="Nov 17" time="11.30am" {...this.props}/>
                            <IconContainer
                                {...this.props} 
                                styleContainer={styles.iconContainer}
                                style={styles.arrowRight}
                                type="MaterialCommunityIcons" 
                                name="arrow-right" 
                            />
                            <Schedule name="To" date="Nov 17" time="11.30am" {...this.props}/>
                        </View>
                    </View>
                    <View style={styles.mapContainer}>
                        <View style={styles.peopleContainer}>
                            <BackgroundImage source={require("../../../assets/mapbg.png")}>
                                <Text style={styles.peopleTitle}>People</Text>
                                <View style={{flex: 1}}>
                                    <UserSlider items={contacts} isButtonThumbnail handleMarker={this.handleMarker}/>
                                </View>
                            </BackgroundImage>
                        </View>
                        <View style={styles.map}>
                            <GoogleMap 
                                defaultRegion={this.state.defaultRegion}
                                changedRegion={this.state.changedRegion}
                                customMapStyle= {customMapStyle}
                                items={markers}
                                mapHeight= {height}
                                zoomEnabled= {false}
                                showsCompass={false}
                                markerImage={markerImage}
                                maxZoomLevel={5}
                            />
                        </View>
                    </View>
                </Content>
           </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingHorizontal: 0
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    actionContainer: {
        fontSize: 20
    },
    requestContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 25
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    meetingTitle: {
        fontSize: deviceSize === "isVerySmall" ? 22 : deviceSize === "isLarge" ? 32 : 30,
        color: "#96c3cf"
    },
    meetingDesc: {
        color: "#2e2e39",
        paddingVertical: deviceSize === "isVerySmall" ? 5 : deviceSize === "isSmall" ? 10 : deviceSize === "isMedium" ? 13 : 18,
        fontSize: deviceSize === "isVerySmall" ? 14 : deviceSize === "isSmall" ? 16 : deviceSize === "isMedium" ? 18 : 22,
    },
    scheduleContainer: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    iconContainer: {
        alignItems: "center", 
        paddingVertical: deviceSize === "isVerySmall" ? 20 : deviceSize === "isSmall" ? 25 : 33,
        paddingRight: 50
    },
    arrowRight: {
       fontSize: 20,
       color: "#cbc9d5"
    },
    peopleContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10000,
        width: "100%",
    },
    peopleTitle: {
        color: "#cbc9d5",
        paddingLeft: 25
    },
    map: {
        flex : 1
    }
});

export default ProfileScreen;
