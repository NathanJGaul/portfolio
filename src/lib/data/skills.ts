export type SkillItem = {
	name: string;
	tier: 'primary' | 'secondary';
};

export type Skills = {
	languages: SkillItem[];
	frameworks: SkillItem[];
	tools: SkillItem[];
	domains: SkillItem[];
	certifications: SkillItem[];
};

const skills: Skills = {
	languages: [
		{ name: 'Python', tier: 'primary' },
		{ name: 'TypeScript', tier: 'primary' },
		{ name: 'C#', tier: 'primary' },
		{ name: 'C++', tier: 'primary' },
		{ name: 'JavaScript', tier: 'primary' },
		{ name: 'Go', tier: 'secondary' },
		{ name: 'SQL', tier: 'secondary' }
	],
	frameworks: [
		{ name: 'React', tier: 'primary' },
		{ name: 'Svelte / SvelteKit', tier: 'primary' },
		{ name: 'Node.js', tier: 'primary' },
		{ name: '.NET / WPF', tier: 'primary' },
		{ name: 'TensorFlow', tier: 'primary' },
		{ name: 'FastAPI', tier: 'primary' },
		{ name: 'LangChain', tier: 'secondary' },
		{ name: 'Streamlit', tier: 'secondary' },
		{ name: 'gRPC', tier: 'secondary' }
	],
	tools: [
		{ name: 'Docker', tier: 'primary' },
		{ name: 'Git / GitHub', tier: 'primary' },
		{ name: 'Linux', tier: 'primary' },
		{ name: 'OpenAI API', tier: 'primary' },
		{ name: 'CI/CD Pipelines', tier: 'primary' },
		{ name: 'YOLO / SAHI', tier: 'secondary' },
		{ name: 'GStreamer', tier: 'secondary' },
		{ name: 'MongoDB', tier: 'secondary' },
		{ name: 'Blender', tier: 'secondary' }
	],
	domains: [
		{ name: 'Defense & Government Software', tier: 'primary' },
		{ name: 'Machine Learning / Computer Vision', tier: 'primary' },
		{ name: 'Full-Stack Web', tier: 'primary' },
		{ name: 'LLM Application Development', tier: 'primary' },
		{ name: 'C2 Systems', tier: 'primary' },
		{ name: 'HIL/SIL Test', tier: 'secondary' },
		{ name: 'DevSecOps', tier: 'secondary' },
		{ name: 'Engineering Leadership', tier: 'secondary' }
	],
	certifications: [
		{ name: 'Stanford AI Professional Program', tier: 'primary' },
		{ name: 'CompTIA Security+ (SY0-701)', tier: 'secondary' },
		{ name: 'Air Force Achievement Medal', tier: 'secondary' }
	]
};

export default skills;
