
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ImpactStory {
  title: string;
  location: string;
  description: string;
  image: string;
}