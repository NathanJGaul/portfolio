export type Project = {
	title: string;
	description: string;
	highlight: string;
	tech: string[];
	github?: string;
	liveUrl?: string;
	image?: string;
	featured: boolean;
};

const projects: Project[] = [
	{
		title: 'WarBot',
		description:
			'End-to-end GPT-4 pipeline for USAF operator use: RAG-adjacent integration with structured operational data, multi-step agent workflows for summarization and reporting, and a Streamlit front end for non-technical users. Deployed to a live USAF operational test environment, cutting 800+ hours/year of manual work.',
		highlight: 'Deployed to USAF test environment, saved 800+ hours/year',
		tech: ['Python', 'OpenAI API', 'LangChain', 'GPT-4', 'Streamlit'],
		github: 'https://github.com/NathanJGaul/warbot',
		featured: true
	},
	{
		title: 'Damage Detection Algorithm (DDA)',
		description:
			'Real-time airfield damage detection from aerial ISR video using YOLOv8x, SAHI sliced inference, GStreamer RTSP ingestion, BotSort tracking, and KLV/MISB-0601 metadata parsing. Docker-containerized with a CI/CD FastAPI test harness for repeatable regression testing across single-image, RTSP video, and batch modes.',
		highlight: 'GPU-accelerated real-time detection from aerial video feeds',
		tech: ['Python', 'C#', 'Docker', 'YOLOv8', 'gRPC', 'FastAPI', 'GStreamer'],
		featured: true
	},
	{
		title: 'Computer Vision Pipeline with Synthetic Data',
		description:
			'Synthetic imagery pipeline in Python, TensorFlow, and Blender to train a UNet segmentation model for automated aircraft surface inspection. This approach removes the need for expensive real-world annotation data collection by training entirely on procedurally generated images.',
		highlight: 'IEEE Published, 2022 — reduced real-world training data by 90%',
		tech: ['Python', 'TensorFlow', 'Blender', 'Docker', 'NumPy'],
		github: 'https://github.com/NathanJGaul/thesis-pipeline',
		image: '/images/projects/computer-vision-inspection.png',
		featured: false
	},
	{
		title: 'PointSpire',
		description:
			'Full-stack task and project management application with a REST API backend, JWT authentication, and real-time UI updates. Developed collaboratively using Agile/Scrum practices with a structured MVC architecture.',
		highlight: 'Production-grade full-stack app with MVC architecture',
		tech: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'REST API'],
		github: 'https://github.com/NathanJGaul/PointSpire',
		image: '/images/projects/pointspire.svg',
		featured: false
	}
];

export default projects;
