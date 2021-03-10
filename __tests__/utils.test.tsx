import React from 'react';
import {getInitails} from '../src/utils/helpers';

describe('sum function', () => {
  it('should return default responne', () => {
    expect(getInitails('MyName')).toEqual('My');
  });

  it('should return default responne', () => {
    expect(getInitails('d fault')).toEqual('d');
  });

  it('should return default responne', () => {
    expect(getInitails('')).toEqual('letters not greater than two');
  });
});
