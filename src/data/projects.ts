export type ProductionProject = {
  kind: 'production';
  id: string;
  name: string;
  statValues: readonly string[];
};

export type OpenSourceProject = {
  kind: 'openSource';
  id: string;
  name: string;
  href: string;
  repo: string;
  statValues: readonly string[];
};

export const production: readonly ProductionProject[] = [
  { kind: 'production', id: 'molcajete', name: 'Molcajete', statValues: ['2,000+', '<60 min'] },
  { kind: 'production', id: 'adapta', name: 'Adapta', statValues: ['40+', '100+'] },
  { kind: 'production', id: 'nopalero', name: 'Nopalero', statValues: ['48', '0'] },
  { kind: 'production', id: 'azulejo', name: 'Azulejo', statValues: ['94', '<5 s'] },
];

export const openSource: readonly OpenSourceProject[] = [
  { kind: 'openSource', id: 'judex', name: 'Judex', href: 'https://github.com/noah-art3mis/judex-mini', repo: 'noah-art3mis/judex-mini', statValues: ['R$ 52', '0.93/s', '0.28/s', '4'] },
  { kind: 'openSource', id: 'zelador', name: 'Zelador', href: 'https://github.com/noah-art3mis/zelador', repo: 'noah-art3mis/zelador', statValues: [] },
];
