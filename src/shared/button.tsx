import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonProps as Props} from '../types/types.d';
import {ButtonStyles as styles} from './styles';
import {RegularText} from './text';

export const Button: React.FC<Props> = ({style, title, ...rest}) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
    <RegularText title={title} style={styles.buttonText} />
  </TouchableOpacity>
);
