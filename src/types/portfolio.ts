export interface ExperienceItem {
	period: string;
	role: string;
	company: string;
	bullets: string[];
}

export type ProjectId = 'take-order' | 'neby' | 'portfolio';

export interface ProjectItem {
	id: ProjectId;
	name: string;
	context: string;
	description: string;
	tags: string[];
	imageAlt: string;
}

export interface SkillGroup {
	label: string;
	items: string[];
}

export interface PortfolioContent {
	experience: ExperienceItem[];
	projects: ProjectItem[];
	skills: SkillGroup[];
}
