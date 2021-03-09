import React from 'react';
import {Text} from 'react-native';
import {TextComponentProps as Props} from '../types/types.d';
import {TextStyles as styles} from './styles';

const RegularText: React.FC<Props> = ({title, style, onPress}) => (
  <Text style={[styles.RegularText, style]} onPress={onPress}>
    {title}
  </Text>
);

const MediumText: React.FC<Props> = ({title, style, onPress}) => (
  <Text style={[styles.medium, style]} onPress={onPress}>
    {title}
  </Text>
);

export {RegularText, MediumText};
