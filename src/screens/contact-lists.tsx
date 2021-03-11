import React, {useEffect, useState} from 'react';
import {FlatList, PermissionsAndroid, Platform, Text, View} from 'react-native';
import Contacts from 'react-native-contacts';
import colors from '../constants/colors';
import {ListItem} from '../shared/list';
import {Loading} from '../shared/loading';
import {ContactListsProps} from '../types/types.d';
import {ContactListStyles as styles} from './styles';

const ContactLists = ({navigation}: ContactListsProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isloading, loading] = useState(true);

  const _renderItem = ({item}: any) => (
    <ListItem
      item={item}
      navigation={() => navigation.navigate('Contact', {item})}
    />
  );

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Contacts.getAll()
        .then((contacts) => {
          loading(false);
          setData(contacts);
        })
        .catch((err) => {
          console.log(err);
          loading(false);
        });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: '',
      }).then(() => {
        Contacts.getAll()
          .then((contacts) => {
            loading(false);
            setData(contacts);
          })
          .catch((err) => {
            console.log(err);
            loading(false);
          });
      });
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Lists</Text>

      <FlatList
        data={data.sort((a: {givenName: string}, b: {givenName: string}) => {
          if (a.givenName < b.givenName) {
            return -1;
          }
          if (a.givenName > b.givenName) {
            return 1;
          }
          return 0;
        })}
        renderItem={_renderItem}
        numColumns={1}
        keyExtractor={(item) => item.recordID}
        style={styles.listContainer}
      />
      {isloading && <Loading color={colors.dark} />}
    </View>
  );
};

export default ContactLists;
