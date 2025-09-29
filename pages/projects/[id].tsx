import type { GetStaticPaths, GetStaticProps } from 'next'
import SEO from '../../components/SEO'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ProjectPage({ project }: any) {
  if (!project) return <div>Not found</div>
  return (
    <>
      <SEO title={project.title} description={project.description} />
      <Navbar />
      <main className="container py-20">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-[color:var(--muted)] mt-2">{project.description}</p>
        <div className="mt-6">
          <h4 className="font-semibold">Tech</h4>
          <div className="mt-2 flex gap-2">
            {project.tech.map((t: string) => <span key={t} className="px-2 py-1 bg-neutral-800 rounded">{t}</span>)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = await import('fs')
  const path = await import('path')
  const file = path.join(process.cwd(), 'data', 'projects.json')
  const raw = fs.readFileSync(file, 'utf-8')
  const projects = JSON.parse(raw)
  return {
    paths: projects.map((p: any) => ({ params: { id: p.id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const fs = await import('fs')
  const path = await import('path')
  const file = path.join(process.cwd(), 'data', 'projects.json')
  const raw = fs.readFileSync(file, 'utf-8')
  const projects = JSON.parse(raw)
  const project = projects.find((p: any) => p.id === params?.id) || null
  return { props: { project } }
}
