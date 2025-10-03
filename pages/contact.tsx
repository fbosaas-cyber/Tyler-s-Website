import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Tyler Robinson</title>
      </Head>

      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1>Contact</h1>
        <p className="muted">For inquiries, please email: <a href="mailto:tgrayrobinson@gmail.com">tgrayrobinson@gmail.com</a></p>
      </main>
    </>
  )
}
