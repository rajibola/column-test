import React from 'react';
import {getInitails} from '../src/utils/helpers';

describe('get first two initials function', () => {
  it('should return My response', () => {
    expect(getInitails('MyName')).toEqual('My');
  });

  it('should return a letter without space', () => {
    expect(getInitails('d fault')).toEqual('d');
  });

  it('should return zero', () => {
    expect(getInitails('')).toEqual('');
  });
});
