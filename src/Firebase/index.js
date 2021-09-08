import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOR4FP6JDUgS9QJZDOYVU7EWqqtIilPTI",
    authDomain: "coder-chez-didi.firebaseapp.com",
    projectId: "coder-chez-didi",
    storageBucket: "coder-chez-didi.appspot.com",
    messagingSenderId: "554526348933",
    appId: "1:554526348933:web:370d5da66f22ef23f7fbec"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}