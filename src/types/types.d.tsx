import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NavigationParamList = {
  Home: undefined;
  ContactLists: undefined;
  Contact: {
    item: {
      recordID: string;
      familyName: string;
      givenName: string;
      hasThumbnail: boolean;
      thumbnailPath: string;
    };
  };
};

type ContactListsNavigationProp = StackNavigationProp<
  NavigationParamList,
  'Home'
>;

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
