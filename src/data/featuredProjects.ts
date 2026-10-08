import { Cpu, Gavel, SearchCheck } from 'lucide-astro';

export const featuredProjects = [
  {
    id: 'adapta', name: 'Adapta', icon: Cpu,
    taglineKey: 'projects.production.adapta.tagline',
    descriptionKey: 'projects.production.adapta.description',
    statValues: ['40+', '100+'],
  },
  {
    id: 'lexgpt', name: 'LexGPT', icon: Gavel,
    taglineKey: 'projects.production.lexgpt.tagline',
    descriptionKey: 'projects.production.lexgpt.description',
    statValues: [],
  },
  {
    id: 'glasshouse', name: 'Glasshouse', icon: SearchCheck,
    taglineKey: 'projects.research.glasshouse.tagline',
    descriptionKey: 'projects.research.glasshouse.description',
    statValues: [],
  },
] as const;
