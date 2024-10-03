import sequelize from '../db/database.js'; // Asegúrate de que este archivo sea correcto
import { db, collection, getDocs } from './firebase.js';
import { PuntosRecarga, SyncStatus } from '../db/models.js'; // O ajusta la ruta según sea necesario
import SyncStatuses from '../db/SyncStatuses.js'; // Importa el modelo

const syncData = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');

    // Crear las tablas si no existen
    await sequelize.sync(); // Asegúrate de que esto esté presente

    // Verificar la última sincronización
    let syncStatus;
    try {
      syncStatus = await SyncStatuses.findOne();
    } catch (error) {
      console.error('Error al obtener el estado de sincronización:', error);
      return; // Salir si hay un error al obtener el estado
    }

    const now = new Date();
    const lastSyncDate = syncStatus ? new Date(syncStatus.lastSync) : null;

    // Si no hay un registro de sincronización o han pasado más de 30 días
    if (!syncStatus || (now - lastSyncDate) > 30 * 24 * 60 * 60 * 1000) {
      // Borrar datos existentes en la tabla
      await PuntosRecarga.destroy({ where: {}, truncate: true });
      console.log('Datos existentes en PuntosRecargas eliminados.');

      // Verifica si hay datos en Firebase
      const puntosRecargaRef = collection(db, 'puntos_recarga');
      const snapshot = await getDocs(puntosRecargaRef);
      
      const puntosRecarga = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      if (puntosRecarga.length === 0) {
        console.log('No hay datos en la colección de Firebase.');
        return;
      }

      let savedCount = 0;

      for (const persona of puntosRecarga) {
        // Acceder a los campos correctamente
        const local = persona.Persona.local || 'Desconocido';
        const direccion = persona.Persona.direccion || 'Desconocido';
        const latitud = persona.latitud || '0';
        const longitud = persona.longitud || '0';

        console.log('Intentando guardar datos en SQLite:', persona); // Mensaje antes de la inserción
        try {
          await PuntosRecarga.create({
            local: local,
            direccion: direccion,
            latitud: latitud,
            longitud: longitud,
          });
          savedCount++;
          console.log('Datos guardados:', {
            local,
            direccion,
            latitud,
            longitud,
          }); // Mensaje después de la inserción
        } catch (error) {
          console.error('Error al guardar el punto de recarga:', error);
        }
      }

      // Actualizar o crear el registro de sincronización
      await SyncStatuses.upsert({ id: 1, lastSync: now }); // ID 1 es arbitrario, puedes elegir otro
      console.log(`Se guardaron ${savedCount} puntos de recarga en SQLite.`);
    } else {
      console.log('No han pasado 30 días desde la última sincronización.');  
    }
  } catch (error) {
    console.error('Error en el proceso de sincronización:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión después de completar
  }
};

syncData();
