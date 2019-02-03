import React,{ PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import FlatList from "../FlatList";
import Button from '../Button/Button';
import IconContainer from '../Icon/Icon';

const ThumbnailContainer = ({ image, selected, index }) => {
  return (
    <View style={styles.thumbnailContainer}>
      <Thumbnail source={{uri: image}} style={styles.contactThumb}/>
      <IconContainer 
        styleContainer={[styles.iconContainer, selected.get(index) && {opacity: 1}]} 
        type="MaterialCommunityIcons" 
        name="check-circle"
        style={styles.iconStyle}
      />
    </View>
  )
}

class ContactList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>)
    }
    this.handleLongPress = this.handleLongPress.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleLongPress (index) {
    console.log("handleLongPress called....", index);
    // this.setState((state) => {
    //   //create new Map object, maintaining state immutability
    //   const selected = new Map(state.selected);
    //   //remove key if selected, add key if not selected
    //   this.state.selected.has(index) ? selected.delete(index, !selected.get(index)) : selected.set(index, !selected.get(index));
    //   return {selected};
    // });
  }

  handlePress (item, index) {
    // this.setState((state) => {
    //   //create new Map object, maintaining state immutability
    //   const selected = new Map(state.selected);
    //   //remove key if selected, add key if not selected
    //   this.state.selected.has(index) ? selected.delete(index, item) : selected.set(index, item);
    //   return {selected};
    // });
    !this.props.locationSearch && this.props.navigation.navigate('LocationSearch')
  }

  render() {
    const { children, items, styleContainer, style, isLocationSearch, ...props } = this.props
    const { selected } = this.state
    console.log({selected})
    return (
      <View style={styleContainer} >
        <FlatList
            {...props} 
            style={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
            data={items}
            extraData={this.state}
            keyExtractor={(value , key) => key.toString()}
            renderItem={(item) => {
              return (  
                <List style={selected.get(item.index) ?  
                  styles.selected : null}>
                  <ListItem avatar>
                    <Button 
                      styleContainer={styles.listButton} 
                      onLongPress={() => this.handleLongPress(item.index)}
                      onPress={() => this.handlePress(item.item, item.index)}
                      activeOpacity={0.1}
                    >
                      <Left>
                        {isLocationSearch ? 
                          <View style={styles.imageContainer}>
                            <Image source={item.item.image} style={styles.contactImage}/>
                          </View> :
                          <ThumbnailContainer image={item.item.uri} index={item.index} selected={selected}/>
                        }
                      </Left>
                      <Body style={styles.bodyContainer}>
                        <Text style={styles.contactName}>{item.item.name}</Text>
                        <Text note style={styles.contactDesc}>{item.item.desc}</Text>
                      </Body>
                    </Button>
                  </ListItem>
                </List>
            )}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flatListContainer:{
    flex: 1
  },
  listButton: {
    flexDirection: 'row'
  },
  bodyContainer: {
    borderColor: "#f9f9fa"
  },
  contactName: {
    color: "#3c5468",
    fontSize: 18,
  },
  contactDesc: {
    color: "#cbc9d5"
  },
  contactThumb: {
    width: 40,
    height: 40,
  },
  contactImage: {
    resizeMode: "contain",
    width: 50 
  },
  thumbnailContainer: {
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#96c3cf",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 10,
  },
  selected: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  iconContainer: {
    opacity: 0,
    position: "absolute",
    right: -1,
    bottom: -1,
    zIndex: 1000
  },
  iconStyle: {
    color: "green",
    borderRadius: 50,
    backgroundColor: "#fff",
    fontSize: 15
  }
});

export default ContactList;
