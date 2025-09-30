
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { useState } from 'react'

export default function Career() {
  return (
    <>
      <SEO title="Career" description="Tyler Robinson's professional experience and LinkedIn." />
      <Navbar />
      <main className="container py-20">
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Tyler Robinson</h1>
          <div className="text-lg font-semibold mb-2">OEM Sales Manager @ Continental ContiTech | USA South</div>
          <div className="text-[color:var(--muted)] mb-2">Continental · Dallas, Texas, United States</div>
          <a href="https://www.linkedin.com/in/tylerg-robinson/" target="_blank" rel="noopener" className="px-6 py-3 bg-primary text-black rounded font-semibold inline-block mb-4">Visit my LinkedIn</a>
          <p className="max-w-2xl text-[color:var(--muted)] mt-4">
            As an OEM Sales Manager at Continental, I leverage my sales and management skills to work with OEMs in the South USA region, focusing on prospecting new customers and bringing value-added opportunities to existing ContiTech customers. In my previous role as a Sales Associate at Continental, I gained valuable experience in sales operations and customer relationship management. I am passionate about delivering exceptional service and driving sales growth for my clients and organization.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Continental',
                logo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/305037319_446862760792468_347301605449015171_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gdQyKV0xwgwQ7kNvwE9Znb3&_nc_oc=Adn7YKkLlSCzdbnlm6A7MR7CkCODP-aXewDQRf4pDzl350H4uYXCEXSin1RSUcl31PqwtCkqmeWm3ABqf6dgEeIl&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kejv4PY5zPRYjlNlO91h0g&oh=00_AfYjDhko-qeUQH3LEAWeZp-LeCIouE-MODFUzRUn3FZpLQ&oe=68E12A9B',
                info: 'ContiTech is Continental’s division specializing in rubber and plastics technology for automotive and industrial applications. As OEM Sales Manager, Tyler drives upselling, prospecting, and value-added solutions for South USA OEMs, focusing on ContiTech products and customer growth.',
                details: [
                  {
                    title: 'OEM Sales Manager',
                    date: 'Apr 2025 - Present · Dallas, TX · Hybrid',
                    desc: 'Work with OEMs in the South USA region, focusing on upselling and prospecting actions for ContiTech products.',
                    skills: 'Artificial Intelligence (AI)'
                  },
                  {
                    title: 'Sales Associate',
                    date: 'Nov 2024 - Mar 2025 · Dallas, TX · Hybrid',
                    desc: 'Analyzed market trends, developed support materials, assisted with key account coordination, and provided consultative analysis to internal stakeholders.'
                  },
                  {
                    title: 'Sales Associate Trainee',
                    date: 'Jul 2024 - Nov 2024 · Fairlawn, OH · On-site',
                    skills: 'Consulting, Problem Analysis, Time Management, Creative Problem Solving, Sales, Artificial Intelligence (AI)'
                  }
                ]
              },
              {
                name: 'Hearst',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Hearst_Corporation_logo.svg',
                info: 'Leading global, diversified media, information and services company.',
                details: [
                  {
                    title: 'Advertisement Sales Specialist (Internship)',
                    date: 'Jun 2023 - Jul 2023 · Houston, TX · On-site',
                    desc: 'Increased Hearst’s pipeline by $38,000. Led prospect through the entire sale cycle, wrote new sales playbook, reorganized CRM and trained Account Executives.',
                    skills: 'Specialty Advertising, AI, Salesforce Sales Cloud, Value Selling'
                  }
                ]
              },
              {
                name: 'Houston Yacht Club',
                logo: 'https://www.houstonyachtclub.com/images/logo.png',
                info: 'Historic sailing club in Houston, TX.',
                details: [
                  {
                    title: 'Sailing Instructor',
                    date: 'Jun 2022 - Jun 2023 · Houston, TX',
                    skills: 'Personal Development, Supervisory Skills, Leadership'
                  }
                ]
              },
              {
                name: 'Saratoga Country Club',
                logo: 'https://www.saratogacc.com/images/logo.png',
                info: 'Private country club in Saratoga, CA.',
                details: [
                  {
                    title: 'Assistant Tennis Coach (Part-time)',
                    date: 'Apr 2017 - Feb 2022 · Saratoga, CA',
                    desc: 'Taught basic and intermediate tennis skills to kids 6-14 yrs old.',
                    skills: 'Team Leadership, Communication, Teaching, Multi-tasking, Organization'
                  },
                  {
                    title: 'Camp Counselor (Seasonal)',
                    date: 'Jun 2017 - Aug 2020 · Saratoga, CA',
                    desc: 'Organized and led summer camps for kids 7-12, teaching basic tennis skills.',
                    skills: 'Team Leadership, Communication, Organization, Time Management, Food Service Operations'
                  }
                ]
              },
              {
                name: 'Los Altos United Methodist Church',
                logo: 'https://www.laumc.org/wp-content/uploads/2020/09/LAUMC-logo.png',
                info: 'Community church in Los Altos, CA.',
                details: [
                  {
                    title: 'Food Services Assistant (Part-time)',
                    date: 'Sep 2019 - Aug 2021 · Los Altos, CA',
                    desc: 'Organized setup, teardown, and staff for special events.',
                    skills: 'Team Leadership, Public Speaking, Management, Communication, Customer Service, Organization, Food Service Operations'
                  },
                  {
                    title: 'Media Specialist',
                    date: 'Jan 2019 - Aug 2020 · Los Altos, CA',
                    desc: 'Controlled audio and video for weekly services, concerts, and events.',
                    skills: 'Multimedia, Live Sound, Communication, Time Management, AV Systems, Multi-tasking, Organization'
                  }
                ]
              },
              {
                name: 'Collimated Holes, Inc.',
                logo: 'https://www.collimatedholes.com/wp-content/uploads/2018/08/collimated-holes-logo.png',
                info: 'Precision optics manufacturer in Los Gatos, CA.',
                details: [
                  {
                    title: 'Line Operator (Contract)',
                    date: 'May 2017 - Aug 2017 · Los Gatos, CA',
                    desc: 'Packaged tiny fiber optic lenses by hand for autonomous cars.',
                    skills: 'Manufacturing, Personal Development, Teamwork, Time Management'
                  }
                ]
              },
              {
                name: 'Zooka Creative',
                logo: 'https://zookacreative.com/wp-content/uploads/2018/08/zooka-logo.png',
                info: 'Creative agency in Sunnyvale, CA.',
                details: [
                  {
                    title: 'Line Operator (Contract)',
                    date: 'May 2017 - Aug 2017 · Sunnyvale, CA',
                    desc: 'Built custom trade show displays for clients.',
                    skills: 'Team Leadership, Manufacturing, Communication, Teamwork, Line Management'
                  }
                ]
              }
            ].map((company, idx) => {
              const [hovered, setHovered] = useState(false)
              return (
                <div key={company.name}
                  className={`relative bg-[color:var(--surface)] rounded-lg shadow-md p-6 transition-all duration-200 border border-transparent hover:border-primary`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <img src={company.name === 'Continental' ? '/continental-logo.jpg' : company.logo} alt={company.name + ' logo'} className="w-12 h-12 object-contain rounded bg-black" onError={e => { e.currentTarget.style.display = 'none'; }} />
                    <h3 className="font-bold text-lg">{company.name}</h3>
                  </div>
                  {company.details.map((role, i) => (
                    <div key={role.title + i} className="mb-3">
                      <div className="font-semibold">{role.title}</div>
                      <div className="text-sm text-[color:var(--muted)]">{role.date}</div>
                      {role.desc && <p className="mt-1 text-sm">{role.desc}</p>}
                      {role.skills && <div className="mt-1 text-xs text-[color:var(--muted)]">Skills: {role.skills}</div>}
                    </div>
                  ))}
                  {/* Tooltip/overlay on hover */}
                  {hovered && (
                    <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-lg z-10">
                      <div className="bg-white text-black rounded-lg shadow-lg p-4 text-center max-w-xs">
                        <div className="font-bold mb-2">{company.name}</div>
                        <div className="mb-2"><img src={company.name === 'Continental' ? '/continental-logo.jpg' : company.logo} alt={company.name + ' logo'} className="w-16 h-16 mx-auto mb-2 object-contain bg-black" onError={e => { e.currentTarget.style.display = 'none'; }} /></div>
                        <div className="text-sm">{company.info}</div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}