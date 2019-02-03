import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function range (from, to) {
    return Array.from(Array(to), (_, i) => from + i)
}

const CALENDAR_HEIGHT = 2400;

const RenderLines = ({ format24h, width }) => {
    const offset = CALENDAR_HEIGHT / 24
    return range(0, 25).map((item, i) => {
        let timeText
        if (i === 0) {
          timeText = ``
        } else if (i < 12) {
          timeText = !format24h ? `${i}:00` :`${i}:00`
        } else if (i === 12) {
          timeText = !format24h ? `${i}:00` : `${i}:00`
        } else if (i === 24) {
          timeText = !format24h ? `12:00` : `${i}:00`
        } else {
          timeText = !format24h ? `${i - 12}:00` : `${i}:00`
        }
        return [
          <Text
            key={`timeLabel${i}`}
            style={[styles.timeLabel, { top: offset * i - 6 }]}
          >
            {timeText}
          </Text>,
          i === 0 ? null : (
            <View
              key={`line${i}`}
              style={[styles.line, { top: offset * i, width: width - 20 }]}
            />
          ),
        
        ]
    })
};

const styles = StyleSheet.create({
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

export default RenderLines;
