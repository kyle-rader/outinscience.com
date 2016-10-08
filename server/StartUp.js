/*
 * Meteor Startup:
 * For running appliction startup code
*/

import { jlog } from '../lib/utils/debug.js';

Meteor.startup(() => {

    if (!Meteor.isServer)
    return;

  // Check for Admin account
  let adminUser = Meteor.users.findOne({roles: 'admin'});

  if (adminUser === undefined) {
    if (Meteor.settings.admin === undefined) {
        console.log("No \"admin\" object found in \"Meteor.settings\"");
        process.exit(1);
    }
    else if (Meteor.settings.admin.username === undefined) {
        console.log("No \"username\" field found in \"Meteor.settings.admin\"");
        process.exit(1);
    }
    else if (Meteor.settings.admin.email === undefined) {
        console.log("No \"email\" field found in \"Meteor.settings.admin\"");
        process.exit(1);
    }
    else if (Meteor.settings.admin.password === undefined) {
        console.log("No \"password\" field found in \"Meteor.settings.admin\"");
        process.exit(1);
    }

    const adminId = Accounts.createUser({
      username: Meteor.settings.admin.username,
      password: Meteor.settings.admin.password,
      firstname: Meteor.settings.admin.firstname,
      lastname: Meteor.settings.admin.lastname,
    });

    Accounts.addEmail(adminId, Meteor.settings.admin.email, true);

    Meteor.users.update({_id: adminId}, {
      $push: { roles: 'admin'}
    });

    adminUser = Meteor.users.findOne({roles: 'admin'});
    console.log("New Admin User: ");
  } else {
    console.log("Found Admin User: ");
  }
  console.log(jlog(adminUser));

});
