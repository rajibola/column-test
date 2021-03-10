import React from 'react';
import renderer from 'react-test-renderer';
import {ListItem} from '../src/shared/list';
import {RegularText} from '../src/shared/text';

export const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Button', () => {
  const Data = {
    recordID: '6b2237ee0df85980',
    emailAddresses: [
      {
        label: 'work',
        email: 'carl-jung@example.com',
      },
    ],
    familyName: 'Jung',
    givenName: 'Carl',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(555) 555-5555',
      },
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
  };
  const Data2 = {
    recordID: '6b2237ee0df85980',
    emailAddresses: [
      {
        label: 'work',
        email: 'carl-jung@example.com',
      },
    ],
    familyName: 'Jung',
    givenName: 'Carl',
    phoneNumbers: [
      {
        label: 'mobile',
        number: '(555) 555-0000',
      },
    ],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
  };
  it('Button component renders correctly', () => {
    const instance = renderer.create(
      <ListItem item={Data} navigation={() => createTestProps({})} />,
    );
    expect(instance).toMatchSnapshot();
  });
  it('Check if numbers render correctly', () => {
    const instance = renderer.create(
      <ListItem item={Data} navigation={() => createTestProps({})} />,
    );
    const textInstance = instance.root.findByType(RegularText);
    expect(textInstance.props.title).toBe('(555) 555-5555');

    instance.update(
      <ListItem item={Data2} navigation={() => createTestProps({})} />,
    );
    expect(textInstance.props.title).toBe('(555) 555-0000');
  });
});
