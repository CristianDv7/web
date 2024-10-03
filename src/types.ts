export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

// src/types.ts
export interface PuntoRecarga {
  id: number; // Asegúrate de que este tipo coincida con tu configuración de SQLite
  local: string;
  direccion: string;
  latitud: string;
  longitud: string;
}
