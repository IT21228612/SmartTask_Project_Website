import { getAvailability } from './projectFiles';

const documents = [
  {
    id: 'taf-document',
    title: 'TAF – Topic Assessment Form',
    description: 'Formal topic assessment approved by the supervisor and examiner panel.',
    ...getAvailability('TAF_25-26J-531.pdf'),
  },
  {
    id: 'proposal-report',
    title: 'Project Proposal Report',
    description: 'Proposal report describing the research problem, objectives, and proposed solution approach.',
    ...getAvailability('IT21228612_Proposal_Report_final_version.pdf'),
  },
  {
    id: 'deployment-report',
    title: 'Deployment Report',
    description: 'Report documenting deployment setup, environment configuration, and release details.',
    ...getAvailability('deployment_report.pdf'),
  },
  {
    id: 'final-report',
    title: 'Final Report (Thesis)',
    description: 'Complete thesis report including system design, implementation, testing, and conclusions.',
    ...getAvailability('Final_report.pdf'),
  },
  {
    id: 'research-paper',
    title: 'Research Paper',
    description: 'Research paper manuscript summarizing novelty, methodology, and evaluation outcomes.',
    ...getAvailability('research_paper.pdf'),
  },
  {
    id: 'log-book',
    title: 'Log Book',
    description: 'Weekly project progress log containing completed tasks, blockers, and milestone updates.',
    ...getAvailability('Log_book_all.pdf'),
  },
  {
    id: 'ui-ux-video-link',
    title: 'UI/UX Demo Video Link',
    description: 'Reference link to the UI/UX demonstration video submission for PP2 checklist.',
    ...getAvailability('UI_UX_demo_video_Link.txt'),
  },
  {
    id: 'git-repo-link',
    title: 'Git Repository Link',
    description: 'Reference link file containing the SmartTask project repository URL used for PP1 checklist.',
    ...getAvailability('Git_Repo_Link.txt'),
  },
];

export default documents;
