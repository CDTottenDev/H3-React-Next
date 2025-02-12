import { Project } from '@/types/project';

export async function getProjects(): Promise<Project[]> {
  const res = await fetch('/api/db');
  return res.json();
}

export async function getProjectById(id: string): Promise<Project | null> {
  const res = await fetch(`/api/db?id=${id}`);
  if (!res.ok) return null;
  return res.json();
}
