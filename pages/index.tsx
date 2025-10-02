import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Robinson</title>
      </Head>
      <main style={{
        padding: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}>
        <h1>TEST</h1>
        <p style={{ marginTop: '1rem', maxWidth: '40rem', textAlign: 'center', color: '#6b7280' }}>
          I build dynamic, performant web apps with a focus on UX, accessibility, and modern tooling.
        </p>
      </main>
    </>
  )
}
