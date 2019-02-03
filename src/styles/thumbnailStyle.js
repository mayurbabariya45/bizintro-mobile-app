import { Dimensions } from 'react-native';
import getScreenSize from '../util/ScreenSize';

const { height } = Dimensions.get("window");

const deviceScreen = getScreenSize(height);

const thumbnailSize  = deviceScreen === "isVerySmall" ? {height: 40, width: 40} : deviceScreen === "isSmall" 
    ? {height: 45, width: 45} : deviceScreen === "isMedium" ? 
    {height: 50, width: 50} : {height: 60, width: 60};

export default thumbnailSize;