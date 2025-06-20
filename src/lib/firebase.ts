
import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

// Placeholder Firebase configuration - replace with your actual values when ready
const firebaseConfig = {
  apiKey: "AIzaSyCCsJMseOtvNraini7Rv0sJ57dBbar_INc",
  authDomain: "portfolio-v2-23629.firebaseapp.com",
  projectId: "portfolio-v2-23629",
  storageBucket: "portfolio-v2-23629.firebasestorage.app",
  messagingSenderId: "1343590432730",
  appId: "1:343590432730:web:4e0bbe07d58660cac2dae3"
};

// Initialize Firebase
console.log('Initializing Firebase with project:', firebaseConfig.projectId);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Try to enable offline persistence (might fail in some browsers)
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Firebase persistence could not be enabled: multiple tabs open');
  } else if (err.code === 'unimplemented') {
    console.warn('Firebase persistence not available in this browser');
  }
});

console.log('Firebase initialized successfully');

export { db };
