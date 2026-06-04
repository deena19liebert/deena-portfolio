import {
  Brain,
  HeartHandshake,
  Accessibility,
  ShieldCheck,
  Layers,
  Globe,
  Music,
  PersonStanding,
  Users,
  BookOpen,
} from 'lucide-react'
import type {
  CuriosityItem,
  ExperienceItem,
  Project,
  Question,
  BeyondItem,
  Achievement,
} from '../types'

export const curiosities: CuriosityItem[] = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Not the buzzword — the deeper question of how machines can reason, adapt, and know when they don\'t know.',
    note: 'Currently: multimodal learning & LLM reasoning',
  },
  {
    icon: HeartHandshake,
    title: 'Psychology',
    description:
      'Why do people decide what they decide? Understanding behavior is what separates useful software from clever software.',
    note: 'Especially: cognitive biases & trust formation',
  },
  {
    icon: Accessibility,
    title: 'Accessibility',
    description:
      'Technology built for everyone, not just power users. Accessibility isn\'t a feature — it\'s a measure of how much we care.',
    note: 'Should be the default, not an afterthought',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Safety',
    description:
      'The internet is full of deception. Building systems that help people navigate that is genuinely important work.',
    note: 'ScamShield, fake review detection',
  },
  {
    icon: Layers,
    title: 'Human-Centered Design',
    description:
      'Design isn\'t decoration. It\'s the layer between intent and understanding — and it deserves engineering rigor.',
    note: 'Where UX meets systems thinking',
  },
  {
    icon: Globe,
    title: 'Human Behavior Online',
    description:
      'How does the medium change the message? How do people form beliefs, trust strangers, and make decisions on the internet?',
    note: 'Where social science meets systems',
  },
]

export const experience: ExperienceItem[] = [
  {
    date: '2024 · 4 Months',
    role: 'Full-Stack Developer Intern',
    company: 'PropGrowthX — Real Estate Technology Platform',
    tags: ['REST APIs', 'Backend Services', 'React', 'API Integration', 'UI/UX'],
    tagVariant: ['default', 'default', 'green', 'green', 'default'],
    points: [
      'Built RESTful APIs handling real-time property listings, tenant management, and transaction data at scale.',
      'Designed backend workflows for availability tracking, user interactions, and purchase operations — prioritizing reliability and clarity.',
      'Bridged backend and frontend seamlessly, enabling dynamic updates without sacrificing performance.',
      'Contributed to UI/UX refinements that made complex property data approachable for everyday users.',
    ],
  },
]

export const projects: Project[] = [
  {
    number: '01',
    tag: 'Trust & Safety · Cybersecurity',
    title: 'ScamShield',
    subtitle: 'A trust intelligence platform for students navigating the internet',
    description:
      'Students encounter fake internships, phishing emails, and suspicious recruiter messages constantly. ScamShield helps them verify recruiter credibility, analyze suspicious domains, and understand threat signals — turning raw anxiety into informed decision-making. The system combines threat intelligence APIs, email header analysis, and domain reputation checks into a coherent trust score.',
    stack: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'Threat Intelligence'],
    type: 'Platform',
  },
  {
    number: '02',
    tag: 'AI · Human Behavior · Marketing',
    title: 'AdTarget AI',
    subtitle: 'LLM-powered campaign intelligence from minimal inputs',
    description:
      'Creating effective ad campaigns usually requires hours of research into audience psychology, demographic patterns, and platform behavior. AdTarget AI collapses this into a conversation. Give it a product, a budget, and a goal — it reasons about your audience, infers behaviors, crafts captions, schedules posts, and outputs API-ready campaign feeds. It\'s less about automation and more about making expertise accessible.',
    stack: ['Python', 'LLM Reasoning', 'FastAPI', 'React', 'Marketing Intelligence'],
    type: 'AI Tool',
  },
  {
    number: '03',
    tag: 'AI Research · Multimodal Learning',
    title: 'Fake Review Detection',
    subtitle: 'A research journey into trustworthy e-commerce',
    description:
      'The question that started this: can AI determine whether an online review is trustworthy? Text alone leaves gaps — so we explored what happens when you combine it with images. Using BERT for semantic text analysis and CNNs for visual signal extraction, we trained a multimodal classifier that outperforms single-modality baselines. Co-authored as a peer-reviewed paper.',
    stack: ['Python', 'PyTorch', 'BERT', 'Transformers', 'FastAPI', 'Docker'],
    type: 'Research',
    isResearch: true,
  },
]

export const questions: Question[] = [
  { text: 'How can AI help people make better decisions — without making those decisions for them?' },
  { text: 'How do people decide what to trust online, and what makes that decision go wrong?' },
  { text: 'Can accessibility become the default rather than a feature added at the end?' },
  { text: 'What actually makes software useful to the people it was built for?' },
  { text: 'Can multimodal AI understand human intent better than any single modality alone?' },
  { text: 'Where is the boundary between helpful automation and taking away human agency?' },
]

export const beyondItems: BeyondItem[] = [
  {
    icon: Music,
    title: 'Music',
    description: 'My thinking companion. I probably have a song for every problem I\'ve ever solved.',
  },
  {
    icon: PersonStanding,
    title: 'Dance',
    description: 'Where logic gives way to feeling. It\'s the most honest kind of expression I know.',
  },
  {
    icon: Users,
    title: 'People',
    description: 'I\'m genuinely fascinated by different lives, perspectives, and ways of seeing the world.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Psychology, behavior, systems, design — the world is an endlessly interesting place.',
  },
]

export const achievements: Achievement[] = [
  {
    year: '2025',
    title: 'Smart India Hackathon Participant',
    description:
      'Built Focus App — an AI-powered Android productivity system with intelligent call blocking, urgent message summarization via GPT, and non-intrusive notifications.',
  },
  {
    year: '2024',
    title: 'TESCO Media Innovation Jam Shortlist',
    description:
      'Selected among top teams for innovative problem-solving and technical implementation in a competitive corporate hackathon.',
  },
  {
    year: '2024',
    title: 'Student Placement Ambassador',
    description:
      'Coordinated student engagement for campus placements and internships — bridging students and opportunities.',
  },
  {
    year: '2024',
    title: 'Co-authored Research Paper',
    description:
      'Peer-reviewed publication on multimodal fake review detection in e-commerce, exploring text + image analysis with deep learning.',
  },
  {
    year: '2023',
    title: 'Machine Learning Certification',
    description: "Stanford University's ML specialization — foundations that inform every AI project I build.",
  },
  {
    year: '2023',
    title: 'Google Cybersecurity Certification',
    description:
      'Formal grounding in cybersecurity fundamentals, directly applicable to trust & safety systems like ScamShield.',
  },
]
