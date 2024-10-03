import { db, collection, getDocs } from './firebase.js'; // Importar Firestore desde tu archivo firebase.js

async function testFirebaseConnection() {
  try {
    // Referencia a la colección 'puntos_recarga' en Firebase
    const puntosRecargaRef = collection(db, 'puntos_recarga');
    
    // Obtener los documentos de la colección
    const snapshot = await getDocs(puntosRecargaRef);

    // Verificar si hay documentos en la colección
    if (snapshot.empty) {
      console.log('No se encontraron puntos de recarga.');
    } else {
      snapshot.forEach(doc => {
        console.log('Documento encontrado:', doc.id, doc.data());
      });
    }

    console.log('Conexión a Firebase exitosa.');
  } catch (error) {
    console.error('Error al conectar con Firebase:', error);
  }
}

// Llamar a la función de prueba
testFirebaseConnection();
