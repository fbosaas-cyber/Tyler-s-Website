import Link from 'next/link'

export default function ProjectCard({ project }: any) {
  return (
    <article className="p-5 bg-[color:var(--surface)] rounded shadow-sm">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-[color:var(--muted)]">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t: string) => <span key={t} className="text-sm px-2 py-1 bg-neutral-800 rounded">{t}</span>)}
      </div>
      {project.url && (
        <div className="mt-4">
          <a href={project.url} target="_blank" rel="noreferrer" className="text-primary underline">View</a>
        </div>
      )}
    </article>
  )
}
