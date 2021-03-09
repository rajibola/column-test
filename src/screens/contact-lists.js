import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  PermissionsAndroid,
  Text,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {getInitails} from '../utils/helpers';
import {ContactListStyles as styles} from './styles';

// : ContactListsProps

const ContactLists = ({navigation}) => {
  const [data, setData] = useState([]);

  const _renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.contactContainer}
      onPress={() => navigation.navigate('Contact', {item})}>
      {item.hasThumbnail ? (
        <Image source={{uri: item.thumbnailPath}} width={40} height={40} />
      ) : (
        <SharedElement id={`item.${item.recordID}.icon`}>
          <View style={styles.noAvatar}>
            <Text style={styles.initials}>{getInitails(item.givenName)}</Text>
          </View>
        </SharedElement>
      )}

      <View style={styles.textContainer}>
        <SharedElement id={`item.${item.recordID}.title`}>
          <Text style={styles.name}>
            {item.givenName} {item.familyName}
          </Text>
        </SharedElement>
        <Text style={styles.number}>{item?.phoneNumbers[0]?.number}</Text>
      </View>
    </TouchableOpacity>
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
