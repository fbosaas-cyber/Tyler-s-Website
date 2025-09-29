import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Robinson — Software Engineer</title>
        <meta name="description" content="Tyler Robinson — building fast, accessible, and delightful web experiences." />
      </Head>

      <Navbar />

      <main className="container py-20">
        <section className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold">
              Tyler Robinson
            </motion.h1>
            <p className="mt-4 text-lg text-[color:var(--muted)] max-w-xl">
              I build dynamic, performant web apps with a focus on UX, accessibility, and modern tooling.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/projects"><a className="px-5 py-3 bg-primary rounded text-black font-medium">View Projects</a></Link>
              <a href="#contact" className="px-5 py-3 border border-neutral-700 rounded">Contact</a>
            </div>
          </div>

          <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="bg-[color:var(--surface)] p-6 rounded-lg">
            <h3 className="font-semibold">Featured</h3>
            <p className="mt-2 text-[color:var(--muted)]">A modern portfolio built with Next.js, TypeScript, Tailwind, and framer-motion.</p>
          </motion.div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Recent Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Simple static previews; Projects page has full list */}
            <div className="p-4 bg-[color:var(--surface)] rounded">
              <h4 className="font-semibold">Project A</h4>
              <p className="text-[color:var(--muted)] mt-2">API-driven dashboard with real-time updates.</p>
            </div>

            <div className="p-4 bg-[color:var(--surface)] rounded">
              <h4 className="font-semibold">Project B</h4>
              <p className="text-[color:var(--muted)] mt-2">E-commerce storefront with optimized performance.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-[color:var(--muted)]">Want to work together? Email me at <a className="underline" href="mailto:hello@example.com">hello@example.com</a></p>
        </section>
      </main>

      <Footer />
    </>
  )
}
