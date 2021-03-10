import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {wp, hp} from './layout';

export const ListStyles = StyleSheet.create({
  number: {
    marginTop: hp(4),
    fontSize: hp(14),
    lineHeight: hp(18),
    opacity: 0.6,
  },
  name: {
    fontSize: hp(14),
    lineHeight: hp(18),
    color: colors.dark,
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
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: hp(16),
    lineHeight: hp(20),
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
    color: colors.dark,
    fontSize: hp(16),
    lineHeight: hp(21),
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
    fontSize: hp(12),
    lineHeight: hp(16),
    color: colors.dark,
    fontFamily: 'rubik-regular',
  },

  medium: {
    fontSize: hp(12),
    lineHeight: hp(16),
    color: colors.dark,
    fontFamily: 'rubik-medium',
  },
});
