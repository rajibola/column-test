import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {fonts} from '../constants/fonts';
import {getStatusBarHeight, hp, isIphoneX, wp} from '../shared/layout';

export const HomeStyles = StyleSheet.create({
  subtitle: {
    ...fonts[16],
    color: colors.light,
    marginTop: hp(40),
    paddingRight: wp(70),
  },
  title: {
    ...fonts[50],
    color: colors.light,
    marginTop: hp(40),
  },
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingTop: isIphoneX() ? getStatusBarHeight() : 0 + wp(15),
    paddingHorizontal: wp(30),
  },
});

export const ContactStyles = StyleSheet.create({
  goback: {
    ...fonts[14],
    alignSelf: 'flex-start',
    marginLeft: wp(20),
  },
  name: {
    ...fonts[24],
    marginTop: hp(20),
    alignSelf: 'baseline',
  },
  container: {
    flex: 1,
    paddingTop: isIphoneX() ? getStatusBarHeight() : 0 + wp(15),
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  initials: {
    ...fonts[30],
    color: colors.white,
    textTransform: 'uppercase',
  },
  noAvatar: {
    width: wp(80),
    height: wp(80),
    backgroundColor: colors.dark,
    borderRadius: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(45),
  },
});

export const ContactListStyles = StyleSheet.create({
  listContainer: {
    paddingTop: hp(10),
  },
  title: {
    ...fonts[20],
    backgroundColor: colors.dark,
    paddingTop: isIphoneX() ? getStatusBarHeight() : 0 + wp(15),
    width: '100%',
    textAlign: 'center',
    paddingBottom: hp(15),
    color: colors.light,
  },
  number: {
    marginTop: hp(2),
    ...fonts[14],
    opacity: 0.6,
  },
  name: {
    ...fonts[14],
    alignSelf: 'baseline',
  },
  container: {
    flex: 1,
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
