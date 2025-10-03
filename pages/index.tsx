import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Robinson — Executive</title>
      </Head>

      <main style={{ 
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        minHeight: '90vh'
      }}>
        <section className="container" style={{ padding: '3.5rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ 
                fontSize: '2.5rem', 
                margin: 0, 
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Tyler Robinson
              </h1>
              <p className="muted" style={{ marginTop: '1.25rem', fontSize: '1.1rem', maxWidth: '60ch', lineHeight: 1.6 }}>
                Executive-level sales and technical leader focused on OEM and enterprise partnerships. I combine
                data-informed strategy with consultative selling to deliver measurable outcomes and build long-term client value.
              </p>

              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/career">
                  <a className="btn btn-primary">
                    View career →
                  </a>
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: 520, borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 30px rgba(2,6,23,0.4)' }}>
                <img src="/profile-photo.PNG" alt="Tyler Robinson" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
