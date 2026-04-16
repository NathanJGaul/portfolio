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
		title: 'Computer Vision Inspection Pipeline',
		description:
			'End-to-end deep learning pipeline for automated aircraft surface inspection. I built a UNet segmentation model that is trained entirely on synthetic images created with Blender. This approach removes the need for expensive real-world annotation data collection.',
		highlight: 'Reduced real-world training data requirements by 90%',
		tech: ['Python', 'TensorFlow', 'Blender', 'Docker', 'NumPy'],
		github: 'https://github.com/NathanJGaul/thesis-pipeline',
		image: '/images/projects/computer-vision-inspection.png',
		featured: true
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
	},
	// {
	// 	title: 'Text-to-Speech Ebook Converter',
	// 	description:
	// 		'Browser-based tool that parses ebook content and synthesizes it into audio entirely on the client side. No server required — all processing happens in the browser using the Web Speech API.',
	// 	highlight: 'Fully client-side, zero server dependency',
	// 	tech: ['TypeScript', 'Svelte', 'Web Speech API'],
	// 	github: 'https://github.com/NathanJGaul/standard_ebooks_tts',
	// 	image: '/images/projects/text-to-speech.svg',
	// 	featured: false
	// }
];

export default projects;
