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
            <p className="lead-text">
              From the innovation hub of Silicon Valley to the dynamic business landscape of Texas,
              my journey represents a unique blend of West Coast tech culture and Southern business acumen.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Beyond Business</h2>
          <div className="interests-grid">
            <div className="interest-card card-gradient">
              <h3>Maritime Exploration</h3>
              <p>
                My passion for sailing spans over a decade, beginning with small boat navigation in middle school 
                and culminating in a transformative three-month Pacific Ocean expedition in 2021. This journey not 
                only honed my leadership and decision-making skills but also led to achieving Rescue Scuba certification. 
                These maritime experiences have instilled in me a deep appreciation for strategic planning, risk 
                management, and adaptability – skills that translate seamlessly into the business world.
              </p>
            </div>

            <div className="interest-card card-gradient">
              <h3>Culinary Exploration</h3>
              <p>
                As an avid culinary enthusiast, I approach cooking as both an art and a learning opportunity. 
                My interest extends beyond mere recipe execution to understanding diverse cultural traditions 
                and techniques. This passion for exploring global cuisines reflects my broader approach to 
                business: embracing diversity, paying attention to detail, and continuously seeking opportunities 
                for innovation and cross-cultural understanding.
              </p>
            </div>

            <div className="interest-card card-gradient">
              <h3>Sporting Connections</h3>
              <p>
                Tennis and golf serve as more than recreational pursuits in my professional life. These sports 
                embody the perfect blend of individual skill development and relationship building. I value these 
                activities as platforms for meaningful networking, understanding that success in business, like 
                in sports, comes from a combination of personal excellence and strong professional relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">The California Years</h2>
          <div className="card-gradient">
            <p>
              My foundation was built at The King's Academy in Sunnyvale, California, where I developed 
              leadership skills through music and technology. As the Trumpet Section Leader and Audio/Video 
              Tech Leader for the Knights Brigade Marching Band, I learned the importance of precision, 
              teamwork, and technical excellence - skills that would later prove invaluable in my 
              professional career.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">The Texas Transition</h2>
          <div className="card-gradient">
            <p>
              The decision to attend Baylor University marked a significant transition in my life, 
              moving from Silicon Valley to Texas. At Baylor, I pursued a dual focus in Professional 
              Selling and Finance, combining my technical background with business acumen. This unique 
              combination has enabled me to bridge the gap between technical solutions and business value 
              in my current role.
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
