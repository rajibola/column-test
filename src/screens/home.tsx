import React from 'react';
import {View} from 'react-native';
import {Button} from '../shared/button';
import {MediumText, RegularText} from '../shared/text';
import {HomeScreenProps} from '../types/types.d';
import {HomeStyles as styles} from './styles';

const Home = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <MediumText title="Hello Column/" style={styles.title} />

      <RegularText
        title="Press the button below to show your contacts"
        style={styles.subtitle}
      />

      <Button
        title="enter"
        onPress={() => navigation.navigate('ContactLists')}
      />
    </View>
  );
};

export default Home;
