/*
 * AuthedComponentContainer.jsx
 * Component for wrapping comps that require authentication
 */

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

AuthedComponentContainer = createContainer(({ params }) => {
  const user = Meteor.user();
  return {
    user,
    canView() {
      return Boolean(user);
    }
  };
}, AuthedComponent);

export default AuthedComponentContainer;
