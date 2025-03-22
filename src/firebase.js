// Importación modular de Firebase para v9+
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "tu-apiKey",
  authDomain: "tu-authDomain",
  projectId: "tu-projectId",
  storageBucket: "tu-storageBucket",
  messagingSenderId: "tu-messagingSenderId",
  appId: "tu-appId"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);

// Inicialización de Firestore
const db = getFirestore(app);

export { app, db };
