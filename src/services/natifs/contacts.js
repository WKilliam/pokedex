import React from 'react';
import {Share} from 'react-native';
import {useSelector} from 'react-redux';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';

const ContactServices = {
  onShare: async name => {
    try {
      const result = await Share.share({
        message: `Mon pokemon est ${name}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  },

  _getContacts: () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(
      Contacts.getAll()
        .then(contacts => {
          // work with contacts
          onShare();
        })
        .catch(e => {
          console.log(e);
        }),
    );
  },
};

export default ContactServices;
