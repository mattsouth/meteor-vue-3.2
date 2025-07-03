Skeleton vue app with accounts-password and Accounts.config.  The desired behaviour is to setup the app, go to http://localhost:3000, open up the javascript console and type `Meteor.loginWithPassword('user', 'changeme')` which will:
1. authenticate the test user setup in /server/main.js
2. show the message "Hello user!" *in blue*

----

# Meteor + Vue3 + Vite

This is a simple example of how to use Vue3 with Meteor.

## How to use

1. Clone this repo
2. Run `meteor npm install`
3. Run `meteor`
4. Open `http://localhost:3000` in your browser

## Libraries used

- [Vue3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://next.router.vuejs.org/)
- [Meteor](https://www.meteor.com/)
- [Vue Meteor Tracker](https://github.com/meteor-vue/vue-meteor-tracker)
- [Tailwind CSS](https://tailwindcss.com/)
