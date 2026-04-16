export type SkillItem = {
	name: string;
	tier: 'primary' | 'secondary';
};

export type Skills = {
	languages: SkillItem[];
	frameworks: SkillItem[];
	tools: SkillItem[];
	domains: SkillItem[];
};

const skills: Skills = {
	languages: [
		{ name: 'Python', tier: 'primary' },
		{ name: 'TypeScript', tier: 'primary' },
		{ name: 'C#', tier: 'primary' },
		{ name: 'C++', tier: 'primary' },
		{ name: 'JavaScript', tier: 'primary' },
		{ name: 'Go', tier: 'secondary' }
	],
	frameworks: [
		{ name: 'Svelte / SvelteKit', tier: 'primary' },
		{ name: 'React', tier: 'primary' },
		{ name: 'Node.js', tier: 'primary' },
		{ name: 'WPF', tier: 'primary' },
		{ name: 'TensorFlow', tier: 'primary' },
		{ name: 'Streamlit', tier: 'secondary' }
	],
	tools: [
		{ name: 'Docker', tier: 'primary' },
		{ name: 'Git', tier: 'primary' },
		{ name: 'Linux', tier: 'primary' },
		{ name: 'MongoDB', tier: 'primary' },
		{ name: 'Blender', tier: 'secondary' },
		{ name: 'OpenAI API', tier: 'secondary' }
	],
	domains: [
		{ name: 'Machine Learning / CV', tier: 'primary' },
		{ name: 'Defense & Government Software', tier: 'primary' },
		{ name: 'Full-Stack Web', tier: 'primary' },
		{ name: 'LLM Application Development', tier: 'primary' },
		{ name: 'Autonomy Systems', tier: 'secondary' },
		{ name: 'Agile / Scrum', tier: 'secondary' }
	]
};

export default skills;
