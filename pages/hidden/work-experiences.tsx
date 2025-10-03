import { NextPage } from 'next';
import Head from 'next/head';

const workExperiences = [
	{
		company: 'Continental',
		role: 'OEM Sales Manager',
		description: 'Driving sales growth in the South USA region by upselling and prospecting ContiTech products, leveraging AI tools to enhance client engagement.',
	},
	{
		company: 'Hearst',
		role: 'Advertisement Sales Specialist',
		description: 'Increased pipeline by $38,000, closed sales, authored a sales playbook, and optimized CRM processes to boost efficiency.',
	},
	{
		company: 'Houston Yacht Club',
		role: 'Sailing Instructor',
		description: 'Taught sailing techniques and supervised youth programs, fostering leadership and teamwork.',
	},
	{
		company: 'Saratoga Country Club',
		role: 'Assistant Tennis Coach',
		description: 'Coached children aged 6-14 in tennis, focusing on skill development and sportsmanship.',
	},
	{
		company: 'Los Altos United Methodist Church',
		role: 'Media Specialist',
		description: 'Managed audio and video systems for weekly services and special events, ensuring high-quality production.',
	},
	{
		company: 'Collimated Holes, Inc.',
		role: 'Line Operator',
		description: 'Packaged fiber optic lenses for autonomous vehicles, maintaining precision and quality standards.',
	},
	{
		company: 'Zooka Creative',
		role: 'Line Operator',
		description: 'Constructed custom trade show displays, collaborating with teams to meet client specifications.',
	},
];

const WorkExperiences: React.FC = () => {
	return (
		<>
			<Head>
				<title>Work Experiences — Tyler Robinson</title>
			</Head>
			<main className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
				<h1 className="section-title">Full Work Experiences</h1>
				<div className="career-grid">
					{workExperiences.map((experience, index) => (
						<div key={index} className="career-card">
							<h3 className="career-role">{experience.role}</h3>
							<p className="career-company">{experience.company}</p>
							<p className="muted">{experience.description}</p>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default WorkExperiences;