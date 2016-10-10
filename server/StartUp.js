/*
 * Meteor Startup:
 * For running appliction startup code
*/

import { jlog } from '../lib/utils/debug.js';

Meteor.startup(() => {

    if (!Meteor.isServer)
    return;

});
