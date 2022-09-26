
import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {

    apiKey: "AIzaSyD4QQVZX64RqihpIvi0f_K6ScM5iOZEYd0",
  
    authDomain: "ecommerceapp-dc0e1.firebaseapp.com",
  
    databaseURL: "https://ecommerceapp-dc0e1-default-rtdb.firebaseio.com",
  
    projectId: "ecommerceapp-dc0e1",
  
    storageBucket: "ecommerceapp-dc0e1.appspot.com",
  
    messagingSenderId: "243295520108",
  
    appId: "1:243295520108:web:72c581f14d7690ff265f49"
  
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };