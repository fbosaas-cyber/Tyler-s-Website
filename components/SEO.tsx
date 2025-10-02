import Head from 'next/head'

export default function SEO({ title, description }: { title?: string; description?: string }) {
  const siteTitle = title ? `${title} — Tyler Robinson` : 'Tyler Robinson — Software Engineer'
  const siteDescription = description || 'Tyler Robinson — building modern web apps.'
  
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:site_name" content="Tyler Robinson" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
    </Head>
  )
}
