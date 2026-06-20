export type Project = {
	title: string;
	description: string;
	tech: string[];
	github?: string;
	liveUrl?: string;
};

const projects: Project[] = [
	{
		title: 'Orbital Watch',
		description:
			'Real-time satellite telemetry dashboard with a Three.js WebGL orbital globe, Redis pub/sub, and a SignalR hub. Tracks live lat/lon/alt positions with ring-buffered trail geometry.',
		tech: ['.NET Core 10', 'React 18', 'Three.js', 'Redis', 'SignalR', 'Docker'],
		github: 'https://github.com/NathanJGaul/orbital-watch'
	},
	{
		title: 'PointSpire',
		description:
			'Full-stack task and project management with a REST API, JWT authentication, and real-time UI updates. Developed using Agile/Scrum practices with a structured MVC architecture.',
		tech: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
		github: 'https://github.com/NathanJGaul/PointSpire'
	}
];

export default projects;
