import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDYw_VAlYW1a89zaoZsJKsLzXCPUEYSysA",
  authDomain: "reactapp-85484.firebaseapp.com",
  projectId: "reactapp-85484",
  storageBucket: "reactapp-85484.appspot.com",
  messagingSenderId: "445199614723",
  appId: "1:445199614723:web:5ec91769fbb528813b9f36"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)