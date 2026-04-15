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
			'End-to-end deep learning pipeline for automated aircraft surface inspection. Built a UNet segmentation model trained entirely on synthetically generated imagery produced with Blender, eliminating the need for costly real-world annotation data collection.',
		highlight: 'Reduced real-world training data requirements by 90%',
		tech: ['Python', 'TensorFlow', 'Blender', 'Docker', 'NumPy'],
		github: 'https://github.com/nathanjgaul',
		featured: true
	},
	{
		title: 'PointSpire',
		description:
			'Full-stack task and project management application with a REST API backend, JWT authentication, and real-time UI updates. Developed collaboratively using Agile/Scrum practices with a structured MVC architecture.',
		highlight: 'Production-grade full-stack app with MVC architecture',
		tech: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'REST API'],
		github: 'https://github.com/PointSpire',
		featured: true
	},
	{
		title: 'Text-to-Speech Ebook Converter',
		description:
			'Browser-based tool that parses ebook content and synthesizes it into audio entirely on the client side. No server required — all processing happens in the browser using the Web Speech API.',
		highlight: 'Fully client-side, zero server dependency',
		tech: ['TypeScript', 'Svelte', 'Web Speech API'],
		github: 'https://github.com/nathanjgaul',
		featured: false
	}
];

export default projects;
