import Link from 'next/link'

export default function Navbar() {
  return (
    <header style={{ borderBottom: '1px solid var(--card-border)', background: 'transparent' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
        <div style={{ fontWeight: 700 }}>
          <Link href="/" className="" style={{ color: 'var(--text)', textDecoration: 'none' }}>Tyler Robinson</Link>
        </div>

        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li><Link href="/career" className="muted">Career</Link></li>
            <li><Link href="/about" className="muted">About</Link></li>
            <li><Link href="/contact" className="muted">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
