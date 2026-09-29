export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  tag: string;
}

export interface MilestoneItem {
  number: string;
  category: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  fullName: string;
  category: string;
  description: string;
  url: string;
  tags: string[];
  badge?: string;
  language?: string;
  languageColor?: string;
  accent?: 'cyan' | 'violet' | 'emerald' | 'amber';
  icon?: 'widgets' | 'cpu' | 'git-branch' | 'brain';
}

export interface ProfileData {
  name: string;
  identity: string;
  brandPhrase: string;
  shortDescription: string;
  community: {
    name: string;
    role: string;
    url: string;
    github: string;
    description: string;
    philosophy: string;
  };
  socials: {
    github: string;
    linkedin: string;
    community: string;
    communityGithub: string;
  };
  education: {
    degree: string;
    field: string;
    description: string;
  };
  exploring: string[];
  skills: SkillItem[];
  journey: MilestoneItem[];
  featuredProject: ProjectItem;
  projects: ProjectItem[];
}
