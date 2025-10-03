import fs from 'fs'
import path from 'path'
import Head from 'next/head'

type CareerEntry = {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  location?: string
  summary?: string
  highlights?: string[]
}

export default function Career({ entries }: { entries: CareerEntry[] }) {
  return (
    <>
      <Head>
        <title>Career — Tyler Robinson</title>
      </Head>
      <main style={{ padding: '4rem', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Career</h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Professional experience and selected accomplishments.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {entries.map((e) => (
            <article key={e.id} style={{ padding: '1.25rem', borderRadius: 8, border: '1px solid #e5e7eb' }}>
              <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: '1.125rem' }}>{e.role}</h2>
                  <div style={{ color: '#374151', fontWeight: 600 }}>{e.company}</div>
                </div>
                <div style={{ textAlign: 'right', color: '#6b7280' }}>
                  <div>{formatDateRange(e.startDate, e.endDate)}</div>
                  {e.location && <div style={{ fontSize: '0.9rem' }}>{e.location}</div>}
                </div>
              </header>

              {e.summary && <p style={{ marginTop: '0.75rem', color: '#374151' }}>{e.summary}</p>}

              {e.highlights && e.highlights.length > 0 && (
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  {e.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </main>
    </>
  )
}

function formatDateRange(start: string, end: string) {
  const s = formatYearMonth(start)
  const e = end.toLowerCase() === 'present' ? 'Present' : formatYearMonth(end)
  return `${s} — ${e}`
}

function formatYearMonth(ym: string) {
  // expect yyyy-mm
  const [y, m] = ym.split('-')
  if (!y) return ym
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const mi = Number(m) - 1
  return m ? `${monthNames[mi] ?? ''} ${y}` : y
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), 'data', 'career.json')
  const raw = fs.readFileSync(file, 'utf-8')
  const entries: CareerEntry[] = JSON.parse(raw)
  return { props: { entries } }
}
