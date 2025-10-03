import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Robinson — Executive</title>
      </Head>

      <main style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.04), transparent)' }}>
        <section className="container" style={{ padding: '3.5rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2.25rem', margin: 0, lineHeight: 1.05 }}>
                Tyler Robinson
              </h1>
              <p className="muted" style={{ marginTop: '1rem', fontSize: '1.05rem', maxWidth: '60ch' }}>
                Executive-level sales and technical leader focused on OEM and enterprise partnerships. I combine
                data-informed strategy with consultative selling to deliver measurable outcomes and build long-term client value.
              </p>

              <div style={{ marginTop: '1.25rem' }}>
                <Link href="/career">
                  <a style={{
                    display: 'inline-block',
                    padding: '0.6rem 1rem',
                    background: 'var(--primary)',
                    color: 'var(--text)',
                    borderRadius: 8,
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}>View career →</a>
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
