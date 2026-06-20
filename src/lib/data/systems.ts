export type SystemEntry = {
	title: string;
	subtitle: string;
	description: string;
	tech: string[];
	context: string;
};

const systems: SystemEntry[] = [
	{
		title: 'Joint Cyber C2 Evaluation',
		subtitle: 'Tri-Service Operational Test Lead',
		description:
			"Led the one-year evaluation of the DoD's first Joint Cyber Command and Control platform. Gathered field requirements from Air Force, Army, and Navy operators, translated them into test architecture, identified 6 critical deficiencies, and tracked resolution across service stakeholders.",
		tech: ['Test Architecture', 'C2 Systems', 'Multi-Domain Ops'],
		context: 'AFOTEC \u2022 2022\u20132026'
	},
	{
		title: 'LLM-Powered Operational Reporting',
		subtitle: 'AI Research Fellow, MIT AI Accelerator',
		description:
			'Deployed production GPT-4 pipelines that automated USAF operational reporting, cutting 800+ hours of manual work per year. Built data ingestion from structured operational feeds, multi-step agent workflows for summarization and decision support, and a Streamlit front end for non-technical operators.',
		tech: ['Python', 'OpenAI API', 'LangChain', 'GPT-4', 'Streamlit'],
		context: 'AF\u2013MIT AI Accelerator \u2022 2023'
	},
	{
		title: 'Real-Time Airfield Damage Detection',
		subtitle: 'GPU-Accelerated Computer Vision',
		description:
			'GPU-accelerated CV system using YOLOv8x with SAHI sliced inference, GStreamer RTSP ingestion, and BotSort tracking. Processes aerial ISR video in real time to detect airfield damage. Containerized with a FastAPI test harness for repeatable regression testing across single-image, RTSP video, and batch modes.',
		tech: ['Python', 'YOLOv8', 'GStreamer', 'Docker', 'FastAPI', 'gRPC'],
		context: 'DS2 \u2022 2026'
	},
	{
		title: 'Directed Energy Research Program',
		subtitle: 'Engineer & Deputy Program Manager',
		description:
			'Managed a 34-person multidisciplinary engineering team on a directed energy research program at AFRL. Designed a scalable pulsed laser system exceeding energy targets by 50% through optimized thermal management. Prevented a 6-month schedule slip through early risk-reduction analysis.',
		tech: ['Systems Engineering', 'Thermal Management', 'Program Management'],
		context: 'AFRL \u2022 2017\u20132020'
	},
	{
		title: 'Synthetic Data for Aircraft Inspection',
		subtitle: 'IEEE-Published Research',
		description:
			'Built a synthetic imagery pipeline using Python, TensorFlow, and Blender to train a UNet segmentation model for automated aircraft surface inspection. Eliminated the need for expensive real-world annotation by training entirely on procedurally generated images. Reduced real-world data requirements by 90%.',
		tech: ['Python', 'TensorFlow', 'Blender', 'UNet', 'Docker'],
		context: 'AFIT Thesis \u2022 2021'
	},
	{
		title: 'Defense Software Applications',
		subtitle: 'Full-Stack Engineering for DoD Clients',
		description:
			'Building production C#/.NET applications for DoD clients across the full stack: backend service architecture, REST API integration, and CI/CD-gated testing. Containerized deployments with Docker.',
		tech: ['C#', '.NET', 'REST APIs', 'CI/CD', 'Docker'],
		context: 'DS2 \u2022 2026\u2013Present'
	}
];

export default systems;
