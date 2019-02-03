import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, StatusBar, Image } from 'react-native';
import { Container, Button, View, Text, Form, Item, Label, Input } from 'native-base';
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <Container>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.8)" barStyle="light-content" />
                {/* <KeyboardAvoidingView behavior="height" style={{flex: 1}}> */}
                    <BackgroundImage source={require("../../assets/images/background/drawer-bg.jpg")}>
                        <ScrollView contentContainerStyle={styles.container}>
                            <View style={styles.textContainer}>
                                <Image source={require('../../../assets/main-logo.png')} style={{height: 80, width: 250}}/>
                                <Text style={styles.startText}>The world's #1 introduction tool empowering more meaningful interactions</Text>
                            </View>
                            <Form style={styles.formContainer}>
                                <Item regular style={styles.itemContainer}>
                                    <Input 
                                        style={[styles.input, styles.inputRadius]} 
                                        placeholder="Email Address" 
                                        placeholderTextColor="#3c5467"
                                    />
                                </Item>
                                <Item regular style={styles.itemContainer}>
                                    <Input 
                                        style={[styles.input, styles.inputRadius]} 
                                        placeholder="Password" 
                                        placeholderTextColor="#3c5467"
                                    />
                                </Item>
                                <Button full style={[styles.buttonContainer, styles.inputRadius]} onPress={this.handleSubmit}>
                                    <Text uppercase={false} style={styles.buttonText}>SIGN IN</Text>
                                </Button>
                            </Form>
                        </ScrollView>
                    </BackgroundImage>
                {/* </KeyboardAvoidingView> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent:"flex-start",
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
    },
    textContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginVertical: 60,
        flex: 4
    },
    startTitle: {
        color: "#fff",
        fontSize: 45,
        fontFamily: 'Roboto-Regular',
        fontWeight: "bold"
    },
    startText: {
        fontSize: 15,
        color: "#fff",
        paddingTop: 15
    },  
    formContainer: {
        marginTop: 30,
        flex: 6
    },
    itemContainer: {
        marginLeft: 0,
        marginBottom: 10,
        borderColor: "transparent"
    },
    input: {
        color: "#3c5467",
        height: 60,
        paddingLeft: 20,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        backgroundColor: "#96c3cf",
        height: 60,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "Roboto-Regular",
        color: "#3c5467"
    },
    inputRadius: {
        borderRadius: 5,
    }
});

export default LoginScreen;
