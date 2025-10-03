import Link from 'next/link'

export default function Navbar() {
  return (
    <header style={{ 
        borderBottom: '1px solid var(--card-border)', 
        background: 'var(--nav)',
        boxShadow: 'var(--card-shadow)'
      }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
        <div style={{ fontWeight: 700 }}>
          <Link href="/" className="nav-link" style={{ color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s ease' }}>
            Tyler Robinson
          </Link>
        </div>

        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li><Link href="/career" className="nav-link">Career</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
