import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Robinson — Executive</title>
      </Head>

      <main style={{ padding: '3rem', maxWidth: 1000, margin: '0 auto' }}>
        <section style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '3rem' }}>
          <img
            src="/profile-photo.PNG"
            alt="Tyler Robinson"
            style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', border: '3px solid #0ea5a8' }}
          />

          <div>
            <h1 style={{ margin: 0, fontSize: '1.75rem' }}>Tyler Robinson</h1>
            <p style={{ marginTop: '0.5rem', color: '#6b7280', maxWidth: '60ch' }}>
              Executive-level sales and technical leader with a proven record of driving revenue growth,
              building high-performing teams, and delivering complex solutions for OEM and enterprise clients.
              Experienced in consultative selling, strategic account management, and cross-functional program delivery.
            </p>

            <p style={{ marginTop: '1rem' }}>
              <a href="/career" style={{ color: '#0ea5a8', textDecoration: 'none', fontWeight: 600 }}>View career →</a>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
