/**
 * These modules are automatically imported by jorgenvatle:vite.
 * You can commit these to your project or move them elsewhere if you'd like,
 * but they must be imported somewhere in your Meteor mainModule.
 *
 * More info: https://github.com/JorgenVatle/meteor-vite#lazy-loaded-meteor-packages
 **/
import "../_vite-bundle/server/_entry.mjs"
/** End of vite auto-imports **/

import { Accounts } from 'meteor/accounts-base'

Accounts.config({
  defaultFieldSelector: {
    emails: 1,
    profile: 1,
    username: 1,
    colour: 1
  }
})
