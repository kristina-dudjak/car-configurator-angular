const functions = require('firebase-functions')
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
const admin = require('firebase-admin')
admin.initializeApp()

const addUserToDb = functions.auth.user().onCreate((user: any) => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .set({
      email: user.email
    })
})
module.exports = { addUserToDb }
