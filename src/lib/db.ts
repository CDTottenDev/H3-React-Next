import { Project } from '@/types/project';

export async function getProjects(): Promise<Project[]> {
  const res = await fetch('/api/db');
  return res.json();
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const res = await fetch(`/api/db/${id}`);
  return res.json();
}
