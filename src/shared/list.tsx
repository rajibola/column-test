import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {ListItemProps} from '../types/types.d';
import {getInitails} from '../utils/helpers';
import {wp} from './layout';
import {ListStyles as styles} from './styles';
import {MediumText, RegularText} from './text';

export const ListItem = (props: ListItemProps) => {
  const {navigation, item} = props;
  return (
    <TouchableOpacity style={styles.contactContainer} onPress={navigation}>
      <SharedElement id={`item.${item.recordID}.icon`}>
        {item.hasThumbnail ? (
          <Image
            source={{uri: item.thumbnailPath}}
            width={wp(45)}
            height={wp(45)}
            style={styles.noAvatar}
          />
        ) : (
          <View style={styles.noAvatar}>
            <MediumText
              style={styles.initials}
              title={getInitails(item.givenName)}
            />
          </View>
        )}
      </SharedElement>

      <View style={styles.textContainer}>
        <SharedElement id={`item.${item.recordID}.title`}>
          <MediumText
            style={styles.name}
            title={item.givenName + ' ' + item.familyName}
          />
        </SharedElement>
        <RegularText
          style={styles.number}
          title={item?.phoneNumbers[0]?.number}
        />
      </View>
    </TouchableOpacity>
  );
};
