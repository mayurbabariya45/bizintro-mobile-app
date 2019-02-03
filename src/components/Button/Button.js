import React  from 'react';
import PropTypes from 'prop-types'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import getScreenSize, { height } from '../../util/ScreenSize';

const deviceSize = getScreenSize(height);
const delayLongPress = deviceSize === "isSmall" ? 3000 : 1500;

const Button = ({children, style, activeOpacity, styleContainer, onPress, onLongPress, label, ...props}) => {
    return (
        <TouchableOpacity delayLongPress={delayLongPress}  activeOpacity={activeOpacity} {...props} 
            style={[styles.container, styleContainer]} onLongPress={onLongPress} onPress={onPress}>
            {label.length > 0 && <Text style={[styles.textColor, style]}>{label}</Text>}
            {children}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    style: PropTypes.objectOf(PropTypes.any),
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    label: PropTypes.string
};
Button.defaultProps = {
    style: {},
    onPress: () => {},
    onLongPress: () => {},
    label: ""
}

const styles = StyleSheet.create({
    textColor: {
        color: "#000"
    }
});

export default Button;
