import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface CuriosityItem {
  icon: LucideIcon
  title: string
  description: string
  note: string
}

export interface ExperienceItem {
  date: string
  role: string
  company: string
  tags: string[]
  tagVariant?: ('default' | 'green')[]
  points: string[]
}

export interface Project {
  number: string
  tag: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  type: string
  isResearch?: boolean
}

export interface Question {
  text: string
}

export interface BeyondItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface Achievement {
  year: string
  title: string
  description: string
}
