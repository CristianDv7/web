// src/pages/api/recargas.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PuntosRecarga } from '@/db/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const puntos = await PuntosRecarga.findAll();
    res.status(200).json(puntos);
  } catch (error) {
    console.error('Error fetching puntos de recarga:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
