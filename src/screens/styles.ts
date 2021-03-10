import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {getStatusBarHeight, hp, paddingTopiOS, wp} from '../shared/layout';

export const HomeStyles = StyleSheet.create({
  subtitle: {
    color: colors.light,
    fontSize: hp(16),
    lineHeight: hp(18),
    marginTop: hp(40),
    paddingRight: wp(70),
  },
  title: {
    color: colors.light,
    fontSize: hp(50),
    lineHeight: hp(60),
    marginTop: hp(40),
  },
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: wp(30),
  },
});

export const ContactStyles = StyleSheet.create({
  goback: {
    fontSize: hp(14),
    lineHeight: hp(20),
  },
  name: {
    fontSize: hp(24),
    fontWeight: 'bold',
    color: colors.dark,
    marginTop: hp(20),
    alignSelf: 'baseline',
  },
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    paddingLeft: wp(20),
  },
  initials: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: hp(30),
  },
  noAvatar: {
    width: wp(80),
    height: wp(80),
    backgroundColor: colors.dark,
    borderRadius: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: hp(45),
  },
});

export const ContactListStyles = StyleSheet.create({
  title: {
    fontSize: hp(20),
    backgroundColor: colors.dark,
    paddingTop: getStatusBarHeight() + wp(5),
    width: '100%',
    textAlign: 'center',
    paddingBottom: hp(15),
    marginBottom: hp(10),
    color: colors.light,
  },
  number: {
    marginTop: hp(2),
    fontSize: hp(14),
    opacity: 0.6,
  },
  name: {
    fontSize: hp(14),
    fontWeight: 'bold',
    color: colors.dark,
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
