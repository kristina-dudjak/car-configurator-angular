import * as functions from 'firebase-functions'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
const admin = require('firebase-admin')
admin.initializeApp()

export const addUserToDb = functions.auth.user().onCreate(user => {
  console.log('hello')
  console.log(user)
  return admin
    .database()
    .ref('users/' + user.uid)
    .set({
      email: user.email,
      configurations: []
    })
})
