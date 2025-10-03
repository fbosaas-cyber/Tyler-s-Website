import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll <= 0) {
        setScrollDirection('up')
        return
      }
      
      if (currentScroll > lastScroll && scrollDirection !== 'down') {
        // Scrolling down
        setScrollDirection('down')
      } else if (currentScroll < lastScroll && scrollDirection !== 'up') {
        // Scrolling up
        setScrollDirection('up')
      }
      
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDirection, lastScroll])
  return (
    <header className={`navbar-fixed ${scrollDirection === 'down' ? 'scrolled-down' : 'scrolled-up'}`}>
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
