import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About — Tyler Robinson</title>
      </Head>

      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1>About</h1>
        <p className="muted">A concise professional summary about Tyler Robinson. Replace with your preferred biography, achievements, and links.</p>
      </main>
    </>
  )
}
