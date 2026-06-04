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
		company: 'DS2 / Dynamic Software Solutions',
		role: 'Software Engineer, Government Services',
		period: 'Mar 2026 – Present',
		type: 'software',
		bullets: [
			'Building production C#/.NET applications for DoD clients across the full stack: backend service architecture, REST API integration, and CI/CD-gated testing',
			'Developed a GPU-accelerated Python computer vision system for real-time airfield damage detection using YOLOv8x, SAHI sliced inference, GStreamer RTSP ingestion, BotSort tracking, and KLV/MISB-0601 metadata parsing',
			'Docker-containerized the companion FastAPI test harness with regression tests across single-image, RTSP video, and batch modes, aiding military operators to assess airfield damage in the field at real time'
		]
	},
	{
		company: 'Air Force–MIT AI Accelerator',
		role: 'AI Applications Research Fellow',
		period: 'Apr 2023 – Aug 2023',
		type: 'research',
		badge: 'MIT Collaboration',
		bullets: [
			'Deployed production GPT-4 pipelines in Python to automate USAF operational reporting, cutting 800+ hours/year of manual work; pipelines ran in a live USAF test environment with non-technical operators as primary users',
			'Built the full stack: data ingestion from structured operational feeds, LLM integration with OpenAI API and LangChain, multi-step agent workflows for summarization and decision support, and a Streamlit front end for non-technical operators',
			'Pushed AI/LLM tool adoption across the fellowship, prototyping agentic workflows and presenting findings to Air Force leadership'
		]
	},
	{
		company: 'Air Force Operational Test & Evaluation Center',
		role: 'Test Engineering Deputy / Operational Test Analyst',
		period: 'Mar 2022 – Mar 2026',
		type: 'leadership',
		bullets: [
			"Led the one-year tri-service evaluation of the DoD's first Joint Cyber C2 platform ($765M, 23K warfighters): gathered requirements from Air Force, Army, and Navy field operators, translated them into test architecture, identified 6 critical deficiencies, and tracked resolution across service stakeholders",
			'Directed AI-enabled operational test for 7 Joint Major Defense Acquisition Programs ($14.2B+), validating C2, AI, and autonomous system capabilities against national security mission requirements',
			'Designed HIL/SIL operational test for defense weapons systems; managed data collection plans and KPP/KSA performance metrics across 47 flight test events',
			'Ran cyber vulnerability assessments for a $350M cloud-based C2 program, saving 1,200 man-hours and accelerating the test schedule by 15%',
			'Led a 63-member, 10-organization working group synchronizing operators, developers, and integration/test/training teams across 2 joint C2 programs totaling $1.5B'
		]
	},
	{
		company: 'Air Force Research Laboratory',
		role: 'Engineer & Deputy Program Manager',
		period: 'Jun 2017 – Jul 2020',
		type: 'leadership',
		bullets: [
			'Managed a 34-person multidisciplinary engineering team on a $12M directed energy research program, coordinating hardware and software subsystem integration with industry partners across the full program lifecycle',
			'Designed a scalable pulsed laser system exceeding energy targets by 50% through optimized thermal management',
			'Prevented a 6-month schedule slip through early risk-reduction analysis, protecting a 7-figure program timeline'
		]
	}
];

export default experience;
