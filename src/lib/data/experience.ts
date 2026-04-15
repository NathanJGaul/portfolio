export type ExperienceEntry = {
	company: string;
	role: string;
	period: string;
	type: 'software' | 'research' | 'leadership';
	bullets: string[];
	badge?: string;
};

const experience: ExperienceEntry[] = [
	{
		company: 'DS2',
		role: 'Software Engineer',
		period: 'March 2026 – Present',
		type: 'software',
		bullets: [
			'Develop expeditionary planning tools for government and defense clients using C# and WPF',
			'Build and maintain desktop applications serving mission-critical operational planning workflows',
			'Deliver custom software solutions for military, defense, and commercial organizations'
		]
	},
	{
		company: 'Air Force–MIT AI Accelerator',
		role: 'AI Applications Research Fellow',
		period: 'April 2023 – August 2023',
		type: 'research',
		badge: 'MIT Collaboration',
		bullets: [
			'Conducted applied LLM research using GPT-3.5 and GPT-4 via the OpenAI API for Air Force use cases',
			'Built AI tooling and prototypes with Python and Streamlit, automating operational reporting by 800+ hours/year',
			'Prototyped real-time AI feedback systems for pilot training programs in direct collaboration with MIT researchers'
		]
	},
	{
		company: 'AF Test & Evaluation Center',
		role: 'Operational Test Analyst',
		period: 'March 2022 – March 2026',
		type: 'leadership',
		bullets: [
			"Directed operational testing for the DoD's first Joint Cyber C2 platform, resolving 6 critical deficiencies for 23K warfighters",
			'Led evaluation of multi-billion-dollar defense acquisition programs, informing DoD-level acquisition decisions',
			'Conducted cyber vulnerability assessment for a bi-national cloud-based C2 program, accelerating schedule by 15%'
		]
	},
	{
		company: 'Air Force Research Laboratory',
		role: 'Research Engineer & Program Manager',
		period: 'June 2017 – July 2020',
		type: 'leadership',
		bullets: [
			'Led a 34-person multidisciplinary engineering team on an 8-figure directed energy research program',
			'Designed a scalable pulsed laser system exceeding energy targets by 50% through optimized thermal management',
			'Prevented a 6-month schedule slip through early risk-reduction analysis, protecting a 7-figure program timeline'
		]
	}
];

export default experience;
