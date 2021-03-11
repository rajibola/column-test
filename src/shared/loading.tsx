import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import colors from '../constants/colors';
import {LoadingProps as Props} from '../types/types.d';
import {LoadingStyles as styles} from './styles';

export const Loading: React.FC<Props> = ({color, bgColor}) => (
  <View style={[styles.container, {backgroundColor: bgColor}]}>
    <ActivityIndicator color={color || colors.dark} size="large" />
  </View>
);
