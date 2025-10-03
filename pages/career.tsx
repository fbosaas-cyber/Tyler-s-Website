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

type Education = {
  school: string
  degree: string
  major?: string
  startDate: string
  endDate: string
  activities?: string[]
  description?: string
  skills?: string[]
  grade?: string
  type?: string
}

type Certification = {
  name: string
  issuer: string
}

type Recommendation = {
  author: string
  position: string
  date: string
  relationship: string
  text: string
}

export default function Career({ 
  entries,
  education,
  certifications,
  recommendations 
}: { 
  entries: CareerEntry[]
  education: Education[]
  certifications: Certification[]
  recommendations: Recommendation[]
}) {
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

        <h2 className="section-title">Experience</h2>
        <div className="career-grid">
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



        {recommendations.length > 0 && (
          <>
            <h2 className="section-title" style={{ marginTop: '3rem' }}>Recommendations</h2>
            <div className="career-grid">
              {recommendations.map((rec, index) => (
                <article key={index} className="career-card">
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '50%', 
                      background: 'var(--primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--bg)',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}>
                      {rec.author[0]}
                    </div>
                    <div>
                      <div className="career-role">{rec.author}</div>
                      <div className="muted">{rec.position}</div>
                    </div>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--muted)' }}>{rec.text}</p>
                  <div className="muted" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    {rec.date} • {rec.relationship}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
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
  const careerFile = path.join(process.cwd(), 'data', 'career.json')
  const educationFile = path.join(process.cwd(), 'data', 'education.json')
  
  const careerRaw = fs.readFileSync(careerFile, 'utf-8')
  const educationRaw = fs.readFileSync(educationFile, 'utf-8')
  
  const entries: CareerEntry[] = JSON.parse(careerRaw)
  const { education, certifications, recommendations } = JSON.parse(educationRaw)
  
  return { 
    props: { 
      entries,
      education,
      certifications,
      recommendations
    } 
  }
}
