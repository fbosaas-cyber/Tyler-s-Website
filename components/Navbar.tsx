import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-[color:var(--surface)]">
      <div className="container flex items-center justify-between py-4">
        <Link href="/"><a className="font-semibold">Tyler Robinson</a></Link>
        <nav className="flex gap-4 items-center">
          <Link href="/projects"><a className="text-[color:var(--muted)]">Projects</a></Link>
          <a href="#contact" className="text-[color:var(--muted)]">Contact</a>
        </nav>
      </div>
    </header>
  )
}
