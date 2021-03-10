import {render} from '@testing-library/react-native';
import * as React from 'react';
import App from '../App';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  test('page contains the title and subtitle', async () => {
    const component = <App />;

    const {findByText} = render(component);

    const title = await findByText('Hello Column/');
    const subtitle = await findByText(
      'Press the button below to show your contacts',
    );

    expect(title).toBeTruthy();
    expect(subtitle).toBeTruthy();
  });
});
