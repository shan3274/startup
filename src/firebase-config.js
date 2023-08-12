import { initializeApp, getApp, getApps } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCEexqeaYtrvF6MkKB7IMN8idjmXUtdRcY",
//   authDomain: "e-com-3fbf8.firebaseapp.com",
//   projectId: "e-com-3fbf8",
//   storageBucket: "e-com-3fbf8.appspot.com",
//   messagingSenderId: "50240077736",
//   appId: "1:50240077736:web:f78dc8c4357e75a12c279d",
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBmSFjn-Oec6vv4ICnAhK5tFIMP0-24O80',
  authDomain: 'e-com-2066c.firebaseapp.com',
  projectId: 'e-com-2066c',
  storageBucket: 'e-com-2066c.appspot.com',
  messagingSenderId: '460568628268',
  appId: '1:460568628268:web:cfaa4f7a85502da1afd589',
};

// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
