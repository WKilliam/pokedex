import React from 'react';
import {Share} from 'react-native';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';


const onShare = async (name) => {
  try {
    const result = await Share.share({
      message: `Mon pokemon est ${name}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Pokemon Shared with : ', result.activityType)
      } else {
        console.log('Pokemon Shared !')
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('DIsmissed.')
    }
  } catch (error) {
    alert(error.message);
  }
}

export const _getContacts = (name) => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
  }).then(
      onShare(name)
  );
}