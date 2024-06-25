import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAk36tdYqP6JQgGENih8vjoUKuMbAl-2so",
  authDomain: "numetry-1e2d4.firebaseapp.com",
  projectId: "numetry-1e2d4",
  storageBucket: "numetry-1e2d4.appspot.com",
  messagingSenderId: "394928793857",
  appId: "1:394928793857:web:bb5f069686916579305300",
  measurementId: "G-RYJY3LTKCT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getAuth(app) 

export { auth, app };  
