import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Items from './Items';
import { ScrollView } from 'react-native-gesture-handler';

const CALENDAR_HEIGHT = 2400;

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {
        width,
        items,
        initDate
    } = this.props;
    const offset = CALENDAR_HEIGHT / 24
    return (
        <View style={[styles.container, { width }]}>
          <ScrollView>
            <Text style={[styles.timeLabel, { top: 30 }]}>
              9:00
            </Text>
            <View style={[styles.line, { top: 40, width: width - 20 }]} />
            <Items 
              styleContainer={{ marginLeft: 60, marginTop: 70, top: 0, width: width/ 1.29}}
              eventName="Lunch Break"
              location="Vegano Cafe"
              color="#96c3cf"
              isLocationEvent
            />
            <Text style={[styles.timeLabel, { top: offset * 1 - 6 }]}>
              10:00
            </Text>
            <View style={[styles.line, { top: offset * 1, width: width - 20 }]}/>
            <Text style={[styles.timeLabel, { top: offset * 2 - 6 }]}>
              11:00
            </Text>
            <View style={[styles.line, { top: offset * 2, width: width - 20 }]}/>
            <Items 
              styleContainer={{ marginLeft: 60, marginTop: 100, marginBottom: 15, width: width/ 1.29}}
              eventName="Tentative: Introduction with John Albrerts"
              location="You are still waiting to hear back from John about this meeting."
              color="#ffa200"
              style={{height: 285}}
            />
            <Text style={[styles.timeLabel, { top: offset * 3 - 6 }]}>
              12:00
            </Text>
            <View style={[styles.line, { top: offset * 3, width: width - 20 }]}/>
            <Text style={[styles.timeLabel, { top: offset * 4 - 6 }]}>
              13:00
            </Text>
            <View style={[styles.line, { top: offset * 4, width: width - 20 }]}/>
            <Text style={[styles.timeLabel, { top: offset * 5 - 6 }]}>
              14:00
            </Text>
            <View style={[styles.line, { top: offset * 5, width: width - 20 }]}/>
          </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9fa',
    },
    timeLabel: {
      position: 'absolute',
      left: 15,
      color: 'rgb(170,170,170)',
      fontSize: 15,
      fontFamily: 'Helvetica Neue',
      fontWeight: '100'
  },
  line: {
    height: 1,
    position: 'absolute',
    left: 60 - 1,
    backgroundColor: 'rgba(195, 198, 205, 0.35)',
}
});
export default Events;
