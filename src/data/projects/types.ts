export interface ProjectDetail {
  title: string;
  body: string;
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface Project {
  slug: string;
  id: string;
  name: string;
  displayName?: string;
  date: string;
  owner: string;
  logo?: string;
  link?: ProjectLink;
  summary: string;
  details?: ProjectDetail[];
}

export interface ProjectUi {
  sectionTitle: string;
  githubLabel: string;
  githubAria: string;
  detailsLabel: string;
  detailsAriaPrefix: string;
  moreLabel: string;
  lessLabel: string;
  backLabel: string;
  personName: string;
  reportLabel: string;
  languageLabel: string;
  headingsLabel: string;
  overviewLabel: string;
  detailsSectionLabel: string;
  infoLabel: string;
  roleLabel: string;
  timelineLabel: string;
  websiteLabel: string;
  printWarning: string;
}
