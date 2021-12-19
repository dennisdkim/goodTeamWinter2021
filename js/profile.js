


// function changeEmail() {
// const auth = getAuth();
// updateEmail(auth.currentUser, "user@example.com").then(() => {
//   // Email updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });
// }
// changeEmail();

function updateNameAndEmail() {
            firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            currentUser = db.collection("users").doc(user.uid);

            currentUser.get().then((userDoc) => {
              var user_Name = userDoc.data().name;
              var email_Value = userDoc.data().email;
                document.getElementById("name").value = user_Name;
              document.getElementById("email").value = email_Value;
            });
          } else {
          }
        });
}
updateNameAndEmail();

function returnEmail() {
              firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            currentUser = db.collection("users").doc(user.uid);

            currentUser.get().then((userDoc) => {

              var email_Value = userDoc.data().email;
              return email_Value;
            });
          } else {
          }
        });
}

function returnName() {
                firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            currentUser = db.collection("users").doc(user.uid);

            currentUser.get().then((userDoc) => {

              var name_Value = userDoc.data().name;
              return name_Value;
            });
          } else {
          }
        });
}

