import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Professional' | 'Graduation';
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  size?: 'normal' | 'wide' | 'tall'; // Controls Bento Grid spanning
}

export interface SkillMetric {
  subject: string;
  A: number; // The value (0-100 or 0-10 mapped)
  fullMark: number;
}

export interface SoftSkill {
  title: string;
  icon: React.ElementType;
  description: string;
}

export enum NavLink {
  Home = 'home',
  About = 'about',
  Skills = 'skills',
  Projects = 'projects',
  Contact = 'contact',
}