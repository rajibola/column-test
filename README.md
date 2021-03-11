# column-test [![rajibola](https://circleci.com/gh/rajibola/column-test.svg?style=shield)](https://app.circleci.com/pipelines/github/rajibola/column-test)

## Preview

<span>
<img src="./documentation/preview.gif" alt="preview"  width="270" />
</span>

<br />

## Getting Started

- Fork or Clone the repo, then set it up:

```
$ cd column
$ yarn install
```

### Run on Android

```
$ yarn run android
```

### Run on iOS

```
$ cd ios && pod install
$ cd .. && yarn run ios
```

## A brief description of the project

### Task

1. Display a button to open contact book on screen.

2. On clicking the button, open the list of contacts in user's phone.

3. On contact list, each contact item should display the contact's profile picture, full name and the number/type of number(Home/work)

4. Once the user selects a contact, close the contacts list and display the chosen contact's phone number in a text field(not as an alert/toast).

5. If a contact has multiple phone numbers, you can make the choice of any number

## Solution

1. Fetch the list of contacts using `react-native-contacts` library.

2. Displayed the list of data with FlatList and sorted by first name.

   - FlatList is used when the list of data is large, because it has lazy loading and only shows what's on the screen at any moment.

3. Implemented app navigation with `react-navigation`.

4. Added shared transition using `react-navigation-shared-element` to transition icon and full name from contact-list screen to contact screen.

5. Used `jest`,`react-test-renderer` and `testing-library/react-native` for component and unit test.
