import React from 'react';
import {Image, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {wp} from '../shared/layout';
import {MediumText, RegularText} from '../shared/text';
import {ContactProps} from '../types/types.d';
import {getInitails} from '../utils/helpers';
import {ContactStyles as styles} from './styles';

const Contact = ({navigation, route}: ContactProps) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <RegularText
        onPress={() => navigation.pop()}
        style={styles.goback}
        title="Go back"
      />

      <SharedElement id={`item.${item.recordID}.icon`}>
        {item.hasThumbnail ? (
          <Image
            source={{uri: item.thumbnailPath}}
            width={wp(80)}
            height={wp(80)}
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
      <SharedElement id={`item.${item.recordID}.title`}>
        <MediumText
          style={styles.name}
          title={item.givenName + ' ' + item.familyName}
        />
      </SharedElement>

      <RegularText
        title={item.phoneNumbers[0].label + ': ' + item.phoneNumbers[0].number}
      />
    </View>
  );
};

export default Contact;
