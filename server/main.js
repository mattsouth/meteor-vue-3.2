import { Meteor } from 'meteor/meteor'
import { LinksCollection } from '/imports/api/links'
import { Accounts } from 'meteor/accounts-base'

Accounts.config({
  defaultFieldSelector: {
    emails: 1,
    profile: 1,
    username: 1,
    colour: 1
  }
})

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() })
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if ((await LinksCollection.find().countAsync()) === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://vuejs.org/guide/quick-start.html',
    })

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    })

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    })

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    })
  }

  if ((await Meteor.users.find().countAsync()) === 0) {
    console.log('creating default user')
    const userId = await Accounts.createUser({
      username: 'user',
      email: 'user@openclinical.net',
      password: 'changeme',
      profile: {
        first_name: 'User',
        last_name: 'User',
      }
    })
    await Meteor.users.updateAsync({_id: userId}, {$set: {colour: 'blue'}})
  }
})
