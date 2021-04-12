import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDy1KJ7Of5LgeLDDZzW_vCu8nww9en_ogs",
    authDomain: "reactecom-4e527.firebaseapp.com",
    projectId: "reactecom-4e527",
    storageBucket: "reactecom-4e527.appspot.com",
    messagingSenderId: "110674486712",
    appId: "1:110674486712:web:243e63c864ce6e41a1db4d"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const  snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

try {
   await userRef.set({
     displayName,
     email,
     createdAt,
     ...additionalData
   })
  }
catch (error){
  console.log('error creating user', error.message);
}

}
  return userRef;

};

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





