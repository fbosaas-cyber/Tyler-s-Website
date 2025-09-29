import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  url?: string
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <Head>
        <title>Projects — Tyler Robinson</title>
      </Head>

      <Navbar />

      <main className="container py-20">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-[color:var(--muted)] mt-2">A curated list of selected work. Click a project to learn more.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // Read projects from local file at build time to avoid depending on the dev server
  const fs = await import('fs')
  const path = await import('path')
  const file = path.join(process.cwd(), 'data', 'projects.json')
  const raw = fs.readFileSync(file, 'utf-8')
  const projects = JSON.parse(raw)
  return { props: { projects } }
}
