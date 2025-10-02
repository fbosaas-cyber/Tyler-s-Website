import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="bg-[color:var(--surface)]">
      <div className="container flex items-center justify-between py-4">
  <Link href="/" className="font-semibold">Tyler Robinson</Link>
        <nav className="flex gap-4 items-center">
          <Link href="/projects" className="text-[color:var(--muted)]">Projects</Link>
          <Link href="/career" className="text-[color:var(--muted)]">Career</Link>
          <Link href="/contact" className="text-[color:var(--muted)]">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
