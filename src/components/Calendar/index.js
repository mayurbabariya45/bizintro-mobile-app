import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import moment from "moment";
import dateutils from './utils';
import  Calendar  from './Calendar';

class Component extends React.Component {
  constructor(props) {
    super(props);
    const windowSize = Dimensions.get('window');
    this.viewHeight = windowSize.height;
    this.viewWidth = windowSize.width;
    this.state = {
        markedDates: {}
    };
    this.handleDayChange = this.handleDayChange.bind(this);
  }
  handleDayChange(date){   
    const { dateString } = date;
    const markedDates = Object.assign({}, {
        [dateString]: {
            customStyles: {
                container: {
                  backgroundColor: '#96c3cf',
                  elevation: 6
                },
                text: {
                  color: '#fff',
                  fontWeight: 'bold'
                },
              }
        }
    })
    this.setState({markedDates})
  }
  render() {
    const { firstDay, showAllDays } = this.props;
    const calendarHeight = !showAllDays ? 150: 320;
    const weekDaysNames = dateutils.weekDayNames(firstDay); 
    return (
        <View style={[styles.container, { height: calendarHeight}]}>
            <View style={styles.weeksContainer}>
                {weekDaysNames.map((day, index) => (
                    <Text allowFontScaling={false} key={day+index} style={styles.weekday} numberOfLines={1}>{day.substring(0, 1)}</Text>
                ))}
            </View>
            <View style={styles.calendarContainer}>
                <Calendar
                    current={moment().format('Y-MM-DD')}
                    markingType={'custom'}
                    markedDates={this.state.markedDates}
                    showAllDays={showAllDays}
                    onDayPress={this.handleDayChange}
                    onDayLongPress={this.handleDayChange}
                    hideArrows={true}
                    disableMonthChange={true}
                    firstDay={1}
                    hideDayNames={true}
                    showWeekNumbers={false}
                />
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: "#fff",
       
    },
    calendarContainer: {
        backgroundColor: "blue"
    },
    weeksContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 7,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#fff"
    },
    weekday: {
        width: 70,
        textAlign: 'center',
        fontSize: 16,
        color: "#cbc9d5"
    },
});
export default Component;
