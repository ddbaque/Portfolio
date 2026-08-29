export interface ExperienceItem {
	period: string;
	role: string;
	company: string;
	bullets: string[];
}

export type ProjectId = 'take-order' | 'neby' | 'portfolio';

export type Technology =
	| 'typescript'
	| 'react'
	| 'express'
	| 'postgres'
	| 'raspberry-pi'
	| 'aws'
	| 'next.js'
	| 'c++'
	| 'docker'
	| 'astro'
	| 'figma';

export interface ProjectItem {
	id: ProjectId;
	name: string;
	context: string;
	description: string;
	tags: Technology[];
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
