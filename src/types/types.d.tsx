import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TextStyle, ViewStyle} from 'react-native';

export type ListItemProps = {navigation: () => void; item: ItemProps};

export type HomeScreenProps = {
  navigation: HomeNavigatonProps;
};
export type HomeNavigatonProps = StackNavigationProp<
  {ContactLists: undefined},
  'ContactLists'
>;

export type ButtonProps = {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
};

export type TextComponentProps = {
  title?: string;
  style?: TextStyle | {};
  onPress?: () => void;
};

export type ItemProps = {
  recordID: string;
  familyName: string;
  givenName: string;
  hasThumbnail: boolean;
  thumbnailPath: string;
  phoneNumbers: {number: string; label: string}[];
};

export type NavigationParamList = {
  Home: undefined;
  ContactLists: undefined;
  Contact: {item: ItemProps};
};

type ContactListsNavigationProp = StackNavigationProp<NavigationParamList>;

export type ContactListsProps = {
  navigation: ContactListsNavigationProp;
};

type ContactNavigationProp = StackNavigationProp<
  NavigationParamList,
  'Contact'
>;

type ContactRouteProp = RouteProp<NavigationParamList, 'Contact'>;

export type ContactProps = {
  navigation: ContactNavigationProp;
  route: ContactRouteProp;
};
