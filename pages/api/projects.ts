import { readFileSync } from 'fs'
import { join } from 'path'

export default function handler(req: any, res: any) {
  const file = join(process.cwd(), 'data', 'projects.json')
  const raw = readFileSync(file, 'utf-8')
  const projects = JSON.parse(raw)
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(projects)
}
