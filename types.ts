export enum Section {
  HERO = 'hero',
  INDUSTRIES = 'industries',
  SERVICES = 'services',
  ABOUT = 'about',
  INSIGHTS = 'insights',
  CONTACT = 'contact',
  AI_TOOL = 'ai-tool',
  JOB_BOARD = 'job-board',
  ADMIN = 'admin'
}

export type Domain = 'skilled-trades' | 'finance-it' | null;
export type View = 'landing' | 'jobs' | 'admin';

export interface JobSpec {
  title: string;
  skills: string;
  experience: string;
}

export interface GeneratedJobContent {
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface JobPosting {
  id: string | number;
  domain: Domain;
  ref: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export interface LinkedInPost {
  id: string;
  author: string;
  role: string;
  content: string;
  date: string;
  avatar: string;
  image?: string;
}

export interface AdminCredentials {
  username: string;
  password: string;
}