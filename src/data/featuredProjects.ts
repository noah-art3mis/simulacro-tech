import { Cpu, Gavel, SearchCheck, Mic } from 'lucide-astro';

export const featuredProjects = [
  {
    id: 'adapta', name: 'Adapta', icon: Cpu,
    taglineKey: 'projects.production.adapta.tagline',
    descriptionKey: 'projects.production.adapta.description',
    statValues: ['40+', '100+'],
  },
  {
    id: 'lexgpt', name: 'LexGPT', icon: Gavel,
    href: 'https://lexgpt.com.br/',
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
  {
    id: 'molcajete', name: 'Molcajete', icon: Mic,
    taglineKey: 'projects.production.molcajete.tagline',
    descriptionKey: 'projects.production.molcajete.description',
    statValues: ['2,000+', '<60 min'],
  },
] as const;
