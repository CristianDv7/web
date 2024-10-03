import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAELZZ4OTjayq5mEJnDntBZjbmg60OWxgs",
    authDomain: "ctuclweb.firebaseapp.com",
    projectId: "ctuclweb",
    storageBucket: "ctuclweb.appspot.com",
    messagingSenderId: "394832524129",
    appId: "1:394832524129:web:b84ddb11ee17aaea870b20",
    measurementId: "G-Y5F5TR88Q0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
