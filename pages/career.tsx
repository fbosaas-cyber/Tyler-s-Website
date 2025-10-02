// pages/career.tsx

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import CompanyCard from '../components/CompanyCard' // Import the new component

const professionalExperience = [
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
  // ... Add all your other company objects here, just as you had them before
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
  // Make sure to include ALL your other companies in this array...
];


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
            {professionalExperience.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}