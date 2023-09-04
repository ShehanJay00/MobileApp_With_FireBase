// URLs to specific versions of the Firebase JavaScript SDK libraries

const { initializeApp } = require("firebase/app");

const { getDatabase, ref, push } = require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyC24npu_kLFtdOl2pBZN0-mhdY-nE84KkY",
    authDomain: "playground-e5e18.firebaseapp.com",
    databaseURL: "https://playground-e5e18-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "playground-e5e18",
    storageBucket: "playground-e5e18.appspot.com",
    messagingSenderId: "605894412733",
    appId: "1:605894412733:web:f852634e1122cb5d2faad4"
  };
  
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

//=============================================================================


