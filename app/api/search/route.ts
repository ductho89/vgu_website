import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  let db;
  try {
    const currentDir = process.cwd();
    console.log('Current working directory:', currentDir);

    const vguWebsiteDir = path.join(currentDir, 'vgu_website');
    const databaseDir = path.join(vguWebsiteDir, 'database');
    const dbPath = path.join(databaseDir, 'data.db');

    console.log('Checking directory structure:');
    console.log('vgu_website directory exists:', fs.existsSync(vguWebsiteDir));
    console.log('database directory exists:', fs.existsSync(databaseDir));
    console.log('data.db file exists:', fs.existsSync(dbPath));

    if (!fs.existsSync(dbPath)) {
      throw new Error(`Database file not found at ${dbPath}`);
    }

    console.log('Database file exists');

    db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log('Database opened successfully');

    const events = await db.all(
      `SELECT * FROM events WHERE title LIKE ? ORDER BY title`,
      [`%${query}%`]
    );
    console.log('Events query executed, number of results:', events.length);

    const posts = await db.all(
      `SELECT * FROM posts WHERE title LIKE ? ORDER BY title`,
      [`%${query}%`]
    );
    console.log('Posts query executed, number of results:', posts.length);

    return NextResponse.json({ events, posts });
  } catch (error: unknown) {
    console.error('Database error:', getErrorMessage(error));
    if (error instanceof Error && error.stack) {
      console.error('Error stack:', error.stack);
    }
    return NextResponse.json(
      { error: 'Internal server error', details: getErrorMessage(error) },
      { status: 500 }
    );
  } finally {
    if (db) {
      await db.close();
      console.log('Database connection closed');
    }
  }
}