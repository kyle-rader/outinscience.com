import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      clientId: Meteor.settings.facebook.app_id,
      loginStyle: "popup",
      secret: Meteor.settings.facebook.app_secret
    }
  }
);
