import { Dimensions } from 'react-native';
export const { height, width } = Dimensions.get("window");

const getScreenSize = (size) => {
  if(size >= 450 && size < 550) {
    return 'isVerySmall';
  } else if(size > 550 && size <= 600) {
    return 'isSmall';
  } else if(size < 700) {
    return 'isMedium';
  } else if(size > 700 && size < 800) {
    return "isLarge";
  } else if(size > 800 ) {
    return "isVeryLarge";
  }
}

export default getScreenSize;