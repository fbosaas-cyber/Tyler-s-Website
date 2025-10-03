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
  skills?: string[]
}

export default function Career({ entries }: { entries: CareerEntry[] }) {
  return (
    <>
      <Head>
        <title>Career — Tyler Robinson</title>
      </Head>

      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.75rem' }}>Tyler Robinson</h1>
            <p className="muted" style={{ marginTop: '0.5rem' }}>
              Executive-level sales and technical leader focused on OEM and enterprise partnerships. I combine
              data-informed strategy with consultative selling to deliver measurable outcomes and build long-term client value.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span className="tag">Sales</span>
              <span className="tag">OEM</span>
              <span className="tag">AI</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 520 }}>
              <div style={{ position: 'absolute', inset: 0, transform: 'translate(12px,12px)', background: 'linear-gradient(135deg, rgba(0,0,0,0.06), rgba(124,58,237,0.06))', borderRadius: 12 }} />
              <div style={{ borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
                <img src="/profile-photo.PNG" alt="Tyler Robinson" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        <div style={{ marginTop: '2rem' }} className="career-grid">
          {entries.map((e) => (
            <article key={e.id} className="career-card">
              <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="career-role">{e.role}</div>
                  <div className="career-company">{e.company}</div>
                </div>
                <div style={{ textAlign: 'right' }} className="muted">
                  <div>{formatDateRange(e.startDate, e.endDate)}</div>
                  {e.location && <div style={{ fontSize: '0.9rem' }}>{e.location}</div>}
                </div>
              </header>

              {e.summary && <p style={{ marginTop: '0.75rem' }}>{e.summary}</p>}

              {e.skills && e.skills.length > 0 && (
                <div style={{ marginTop: '0.6rem' }}>
                  {e.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              )}

              {e.highlights && e.highlights.length > 0 && (
                <ul className="highlight-list">
                  {e.highlights.map((h, i) => (
                    <li key={i} className="muted" style={{ marginBottom: '0.5rem' }}>{h}</li>
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
