import React, {useEffect, useState} from 'react';
import {Alert, FlatList, PermissionsAndroid, Text, View} from 'react-native';
import Contacts from 'react-native-contacts';
import {ListItem} from '../shared/list';
import {ContactListStyles as styles} from './styles';

const ContactLists = ({navigation}) => {
  const [data, setData] = useState([]);

  const _renderItem = ({item}) => (
    <ListItem
      item={item}
      navigation={() => navigation.navigate('Contact', {item})}
    />
  );

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Contacts.getAll()
        .then((contacts) => {
          setData(contacts);
        })
        .catch((err) => Alert(err));
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        Contacts.getAll()
          .then((contacts) => {
            setData(contacts);
          })
          .catch((err) => Alert(err));
      });
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Lists</Text>

      <FlatList
        data={data.sort((a, b) => {
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
        keyExtractor={(item, i) => item.recordID}
      />
    </View>
  );
};

export default ContactLists;
