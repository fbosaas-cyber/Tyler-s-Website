import { NextPage } from 'next';
import Head from 'next/head';
import { FaChartLine, FaIndustry, FaSearchDollar, FaUserTie, FaRobot } from 'react-icons/fa';
import SuccessStoryCard from '../components/SuccessStoryCard';
import SEO from '../components/SEO';
import ReferenceCard from '../components/ReferenceCard';

const successStories = [
	{
		icon: FaIndustry,
		title: 'OEM Sales Success',
		story: 'In my first 8 months at Contitech, I prospected 4 new clients, and will generate $7.1 million in sales in 2025.',
		metric: '$7.1M in sales',
		skills: ['Prospecting', 'Client Acquisition', 'Revenue Growth'],
	},
	{
		icon: FaUserTie,
		title: 'Leadership in Sales Growth',
		story: 'Currently leading my team through prospecting efforts to grow sales by 20%.',
		metric: '20% sales growth target',
		skills: ['Leadership', 'Team Management', 'Strategic Planning'],
	},
	{
		icon: FaSearchDollar,
		title: 'Account Management Excellence',
		story: 'Revitalized relationships with clients whose business had slowed, returning them to their original sales volume and growing top line revenue',
		metric: 'Restored sales volumes',
		skills: ['Account Management', 'Client Retention', 'Relationship Building'],
	},
	{
		icon: FaRobot,
		title: 'AI-Driven Solutions for Efficiency',
		story: 'Developed AI-driven tools to automate reporting, saving 200+ hours annually.',
		metric: '200+ hours saved annually',
		skills: ['Artificial Intelligence', 'Automation', 'Efficiency Improvement'],
	},
	{
		icon: FaSearchDollar,
		title: 'First Intern to Complete a Full Sales Cycle',
		story: 'At Hearst, I became the first intern to complete the entire sales cycle, from prospecting to closing, showcasing my ability to drive results and build client trust.',
		metric: 'Full sales cycle completed',
		skills: ['Sales Cycle Management', 'Client Trust', 'Closing Deals'],
	},
];

// Updated resume-like experiences with rephrased content
const experiences = [
	{
		company: 'Continental',
		role: 'OEM Sales Manager',
		description: 'Driving sales growth in the South USA region by upselling and prospecting ContiTech products, leveraging AI tools to enhance client engagement.',
	},
	{
		company: 'Hearst',
		role: 'Advertisement Sales Specialist',
		description: 'Increased pipeline by $38,000, closed sales, authored a sales playbook, optimized CRM processes, and became the first intern to complete a full sales cycle.',
	},
];

export default function Career() {
	return (
		<>
			<Head>
				<title>Career — Tyler Robinson</title>
			</Head>

			<main className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
				<h1 className="section-title">Success Stories</h1>
				<div className="career-grid">
					{successStories.map((story, index) => (
						<SuccessStoryCard
							key={index}
							icon={story.icon}
							title={story.title}
							story={story.story}
							metric={story.metric}
							skills={story.skills}
						/>
					))}
				</div>

				<h2 className="section-title" style={{ marginTop: '3rem' }}>
					Professional Experiences
				</h2>
				<div className="career-grid">
					{experiences.map((experience, index) => (
						<div key={index} className="career-card">
							<h3 className="career-role">{experience.role}</h3>
							<p className="career-company">{experience.company}</p>
							<p className="muted">{experience.description}</p>
						</div>
					))}
				</div>

				<a href="/hidden/work-experiences" className="text-primary hover:underline" style={{ marginTop: '1rem', display: 'block' }}>
					View Full Work Experiences
				</a>

				<h2 className="section-title" style={{ marginTop: '3rem' }}>
					References
				</h2>
				<div className="career-grid">
					<ReferenceCard
						name="Diana Moffett"
						title="General Manager"
						company="Saratoga Country Club"
						quote="It's my absolute pleasure to recommend Tyler Robinson. Tyler and I worked together at Saratoga Country Club. I thoroughly enjoyed my time working with Tyler and came to know him as a truly valuable asset to our team. Tyler quickly took on lead roles and was respected by myself and coworkers for his commitment to each task. His creativeness was always welcome in ways to better programs. When given an assignement/task there was never doubt that Tyler would not give it his all and exceeded expectations. Myself, staff and members were all fortunate to work with Tyler."
					/>
				</div>
			</main>
		</>
	);
}
