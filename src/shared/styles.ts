import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {wp, hp, paddingTopiOS} from './layout';

export const ButtonStyles = StyleSheet.create({
  button: {
    width: wp(363),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(48),
    alignSelf: 'center',
    borderRadius: hp(4),
  },
});
