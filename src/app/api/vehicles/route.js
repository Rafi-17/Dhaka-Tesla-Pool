import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    // Query MySQL pool directly from Next.js server
    const [vehicles] = await pool.query(`
      SELECT 
        v.id, 
        v.model_name, 
        v.max_seats, 
        v.status, 
        u.name AS driver_name
      FROM vehicles v
      JOIN users u ON v.driver_id = u.id
    `);

    return NextResponse.json({
      success: true,
      data: vehicles
    });
  } catch (error) {
    console.error('Database query error:', error);
    return NextResponse.json(
      { success: false, message: 'Database query failed', error: error.message },
      { status: 500 }
    );
  }
}