import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

import { Project } from '@/types/project';

const DB_PATH = path.join(process.cwd(), 'data/db.json');

interface Database {
  projects: Project[];
}

async function readDB(): Promise<Database> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { projects: [] };
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const db = await readDB();

  if (id) {
    const project = db.projects.find((p) => p.id === parseInt(id));
    return NextResponse.json(project || null);
  }

  return NextResponse.json(db.projects);
}
