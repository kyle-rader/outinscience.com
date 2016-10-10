import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

console.log(`Setting Facebook service App_ID:${Meteor.settings.facebook.app_id} Secret:${Meteor.settings.facebook.app_secret}`);
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: Meteor.settings.facebook.app_id,
      loginStyle: "popup",
      secret: Meteor.settings.facebook.app_secret
    }
  }
);
