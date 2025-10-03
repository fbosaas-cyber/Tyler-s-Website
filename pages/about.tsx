import Head from 'next/head'
import fs from 'fs'
import path from 'path'

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

export default function About({ education }: { education: Education[] }) {
  return (
    <>
      <Head>
        <title>About — Tyler Robinson</title>
      </Head>

      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <section className="about-hero">
          <div className="content-wrap">
            <h1 className="gradient-text">My Journey</h1>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">About Me: The Architect of the Win-Win</h2>
          <div className="card-gradient">
            <p className="lead-text">
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '1.5rem', marginTop: '2rem' }}>Why I Do What I Do</strong>
              Sales has never been about the top line for me. It's about the puzzle. Every client, every conversation, every challenge is a new opportunity to learn and craft a solution where everyone wins. My passion lies in understanding the unique needs of a business, identifying where the pieces fit, and architecting partnerships that are transformational, not just transactional. It’s about building a foundation for lasting success.
            </p>
            <p className="lead-text">
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '1.5rem', marginTop: '2rem' }}>Driven by Challenge</strong>
              I thrive on challenges and pushing beyond the known limits. Comfort zones are for standing still, but growth happens just beyond them. This relentless drive fuels my work ethic. I immerse myself in projects, determined to find the most innovative and effective path forward. This mindset allows me to consistently exceed expectations, turning complex problems into opportunities for growth.
            </p>
            <p className="lead-text">
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '1.5rem', marginTop: '2rem' }}>A Mindset for the Corporation</strong>
              My professional philosophy is rooted in team success. I prioritize collective goals over individual accolades. I believe the most successful organizations are built on mutual support, and I am always the first to offer help to my colleagues. True success is when the entire team—and the entire company—wins.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">The Journey to Now and the Vision for the Future</h2>
          <div className="card-gradient">
            <p className="lead-text">
              My story isn't a straight line from A to B, but a collection of experiences that have shaped who I am today. Moving from California to Texas was more than a change of scenery; it was a deliberate step into a dynamic and challenging business landscape. Every past role, whether teaching sailing or coaching tennis, has been a lesson in leadership, communication, and strategy. These experiences built the foundation for the focus and determination I now bring to the corporate world in Dallas.
            </p>
            <p className="lead-text">
              Today, I stand at the intersection of experience and ambition. My goal is not just to grow within a corporation, but to be an integral part of its growth story. I am focused on building and leading high-performing teams, mentoring others, and driving future success for any organization I am part of. The puzzle is always evolving, and I am more passionate than ever about solving it.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <article key={index} className="education-card card-gradient">
                <header>
                  <h3 className="school-name">{edu.school}</h3>
                  <div className="degree-info">
                    <span className="degree">{edu.degree}</span>
                    {edu.major && <span className="major">{edu.major}</span>}
                  </div>
                  <div className="date-range">
                    {edu.startDate} — {edu.endDate}
                  </div>
                </header>

                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}

                {edu.activities && edu.activities.length > 0 && (
                  <div className="activities-section">
                    <h4>Activities and Leadership</h4>
                    <ul>
                      {edu.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.skills && edu.skills.length > 0 && (
                  <div className="skills-section">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Beyond Business</h2>
          <div className="card-gradient">
            <h3 className="subsection-title" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Maritime Exploration</h3>
            <p>
              My passion for sailing spans over a decade, beginning with small boat navigation in middle school and culminating in a transformative three-month Pacific Ocean expedition in 2021. This journey not only honed my leadership and decision-making skills but also led to achieving Rescue Scuba certification. These maritime experiences have instilled in me a deep appreciation for strategic planning, risk management, and adaptability – skills that translate seamlessly into the business world.
            </p>
          </div>
          <div className="card-gradient">
            <h3 className="subsection-title" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Culinary Exploration</h3>
            <p>
              As an avid culinary enthusiast, I approach cooking as both an art and a learning opportunity. My interest extends beyond mere recipe execution to understanding diverse cultural traditions and techniques. This passion for exploring global cuisines reflects my broader approach to business: embracing diversity, paying attention to detail, and continuously seeking opportunities for innovation and cross-cultural understanding.
            </p>
          </div>
          <div className="card-gradient">
            <h3 className="subsection-title" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Sporting Connections</h3>
            <p>
              Tennis and golf serve as more than recreational pursuits in my professional life. These sports embody the perfect blend of individual skill development and relationship building. I value these activities as platforms for meaningful networking, understanding that success in business, like in sports, comes from a combination of personal excellence and strong professional relationships.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const educationFile = path.join(process.cwd(), 'data', 'education.json')
  const educationRaw = fs.readFileSync(educationFile, 'utf-8')
  const { education } = JSON.parse(educationRaw)
  
  return { 
    props: { 
      education
    } 
  }
}
