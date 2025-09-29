import Head from 'next/head'

export default function SEO({ title, description }: { title?: string; description?: string }) {
  return (
    <Head>
      <title>{title ? `${title} — Tyler Robinson` : 'Tyler Robinson — Software Engineer'}</title>
      <meta name="description" content={description || 'Tyler Robinson — building modern web apps.'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}
