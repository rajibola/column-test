import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {ListItemProps} from '../types/types.d';
import {getInitails} from '../utils/helpers';
import {ListStyles as styles} from './styles';

export const ListItem = (props: ListItemProps) => {
  const {navigation, item} = props;
  return (
    <TouchableOpacity style={styles.contactContainer} onPress={navigation}>
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
};
