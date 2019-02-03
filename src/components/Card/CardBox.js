import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { Text, Card, CardItem, Body } from "native-base";
import getScreenSize from '../../util/ScreenSize';

const { height, width } = Dimensions.get("window");
const deviceSize = getScreenSize(height);

const CardBox = ({ children, style, styleContainer, text, isCardSquare, name, date, time, color, cardStyle, ...props}) => 
  ( !isCardSquare ? 
    (
      <Card transparent {...props} style={styleContainer}>
        <CardItem style={styles.cardItemContainer}> 
          <Body>
            <Text style={[style, styles.textColor]}>
              {text}
            </Text>
          </Body>
        </CardItem>
      </Card>
    ) : 
    (
      <Card transparent {...props} style={styleContainer}>
        <CardItem style={[styles.cardItemContainer, cardStyle]}> 
          <Body>
            <Text style={styles.header}>
              {name}
            </Text>
            <Text style={[styles.body, styles.dateTimeStyle]}>
              {date}
            </Text>
            <Text style={[styles.footer, styles.dateTimeStyle]}>
              {time}
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  )

const styles = StyleSheet.create({
  cardItemContainer: {
    backgroundColor: "#f5f4f7",
    borderRadius: 10,
  },
  textColor: {
    color: "#3c5468"
  },
  header: {
    color: "#778699",
    fontWeight: "100"
  },
  body: {
    color: "#3c5468",
    fontWeight: "400",
    paddingTop: 10
  },
  footer: {
    color: "#3c5468",
    paddingTop: 7,
    fontWeight: "100",
  },
  dateTimeStyle: {
    fontSize: deviceSize === "isVerySmall" ? 20 : 25
  }
})

export default CardBox;

