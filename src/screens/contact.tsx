import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {ContactProps} from '../types/types.d';
import {getInitails} from '../utils/helpers';
import {ContactStyles as styles} from './styles';

const Contact = ({navigation, route}: ContactProps) => {
  const {item} = route.params;
  // console.log(item);
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.goBack()} style={styles.goback}>
        Go back
      </Text>

      <SharedElement id={`item.${item.recordID}.icon`}>
        {item.hasThumbnail ? (
          <Image source={{uri: item.thumbnailPath}} width={40} height={40} />
        ) : (
          <View style={styles.noAvatar}>
            <Text style={styles.initials}>{getInitails(item.givenName)}</Text>
          </View>
        )}
      </SharedElement>
      <SharedElement id={`item.${item.recordID}.title`}>
        <Text style={styles.name}>
          {item.givenName} {item.familyName}
        </Text>
      </SharedElement>
    </View>
  );
};

export default Contact;
