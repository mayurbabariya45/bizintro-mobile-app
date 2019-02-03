import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from 'native-base';
import getScreenSize from '../../util/ScreenSize';

const { height } = Dimensions.get("window");
const deviceSize =  getScreenSize(height);

const Schedule = ({ children, style, name, date, time, ...props}) => (
  <View style={styles.eventSchedule}>
    <Text note style={styles.scheduleTitle}>{name}</Text>
    <Text style={styles.dateAndTime}>{date}</Text>
    <Text style={styles.dateAndTime}>{time}</Text>
  </View>
);

const styles = StyleSheet.create({
  eventSchedule: {
    flex: 0.5,
  },
  scheduleTitle: {
    color: "#cbc9d5",
    fontSize: deviceSize === "isVerySmall" ? 14 : deviceSize === "isSmall" ? 15 : 18
  },
  dateAndTime: {
    color: "#2e2e39",
    fontSize: deviceSize === "isVerySmall" ? 18 : deviceSize === "isSmall" ? 20 : deviceSize === "isMedium" ? 25 : 26,
  },
});

export default Schedule;
