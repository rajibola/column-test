import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {fonts} from '../constants/fonts';
import {wp, hp} from './layout';

export const ListStyles = StyleSheet.create({
  number: {
    marginTop: hp(2),
    ...fonts[14],
    opacity: 0.6,
  },
  name: {
    ...fonts[14],
    alignSelf: 'baseline',
  },
  textContainer: {
    borderBottomWidth: hp(1),
    borderBottomColor: colors.grey,
    paddingVertical: hp(8),
    flex: 1,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(20),
    marginBottom: hp(15),
    flex: 1,
  },

  initials: {
    ...fonts[16],
    color: colors.white,
    textTransform: 'uppercase',
  },
  noAvatar: {
    width: wp(45),
    height: wp(45),
    backgroundColor: colors.dark,
    borderRadius: wp(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(10),
  },
});
export const ButtonStyles = StyleSheet.create({
  buttonText: {
    ...fonts[16],
    textTransform: 'uppercase',
  },
  container: {
    height: hp(57),
    paddingHorizontal: wp(36),
    backgroundColor: colors.light,
    position: 'absolute',
    zIndex: 10,
    bottom: hp(26),
    alignSelf: 'center',
    width: wp(342),
    borderRadius: wp(57),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const TextStyles = StyleSheet.create({
  RegularText: {
    ...fonts[12],
    fontFamily: 'rubik-regular',
  },

  medium: {
    ...fonts[12],
    fontFamily: 'rubik-medium',
  },
});
