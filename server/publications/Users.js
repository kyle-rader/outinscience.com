import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function() {
    let currentUser = this.userId;

    if (currentUser) {
      return Meteor.users.find({ _id: currentUser }, {
        fields: {
          email: 1,
          name: 1,
          firstName: 1,
          lastName: 1,
          initials: 1,
        }}
      );
    } else {
      return this.ready();
    }
});
