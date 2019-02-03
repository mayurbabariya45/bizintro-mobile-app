import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import { Text, Icon } from 'native-base';
import Button from '../../components/Button/Button';

class MonthPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { items, onValueChange, selectedValue } = this.props;
        const pickerItems = items.map((itemValue, key) =>  <Picker.Item key={key} label={itemValue} value={itemValue} />)
        return (
            <View style={styles.container}>
                {/* <Picker
                    selectedValue={selectedValue}
                    style={{ width: 100 }}
                    onValueChange={onValueChange}>
                    {pickerItems}
                </Picker> */}
                <Button styleContainer ={styles.buttonStyle}>
                    <Text style={styles.textIconColor}>JUNE</Text>
                    <Icon style={styles.textIconColor} type="MaterialCommunityIcons" name="menu-down"/>
                </Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: "center"
    },
    buttonStyle: {
        alignItems: 'center',
        flexDirection:'row', 
        flexWrap:'wrap',
    },
    textIconColor: {
        color: "#2e2e39"
    }
});

export default MonthPicker;
