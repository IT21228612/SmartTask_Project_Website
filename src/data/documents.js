import tafDocument from '../project_files/TAF_25-26J-531.pdf';
import proposalReport from '../project_files/IT21228612_Proposal_Report_final_version.pdf';
import deploymentReport from '../project_files/deployment_report.pdf';
import finalThesisReport from '../project_files/Final_report.pdf';
import researchPaper from '../project_files/research_paper.pdf';
import logBook from '../project_files/Log_book_all.pdf';
import uiUxVideoLink from '../project_files/UI_UX_demo_video_Link.txt';
import gitRepoLink from '../project_files/Git_Repo_Link.txt';

const documents = [
  {
    id: 'taf-document',
    title: 'TAF – Topic Assessment Form',
    description: 'Formal topic assessment approved by the supervisor and examiner panel.',
    status: 'Available',
    fileUrl: tafDocument,
  },
  {
    id: 'proposal-report',
    title: 'Project Proposal Report',
    description: 'Proposal report describing the research problem, objectives, and proposed solution approach.',
    status: 'Available',
    fileUrl: proposalReport,
  },
  {
    id: 'deployment-report',
    title: 'Deployment Report',
    description: 'Report documenting deployment setup, environment configuration, and release details.',
    status: 'Available',
    fileUrl: deploymentReport,
  },
  {
    id: 'final-report',
    title: 'Final Report (Thesis)',
    description: 'Complete thesis report including system design, implementation, testing, and conclusions.',
    status: 'Available',
    fileUrl: finalThesisReport,
  },
  {
    id: 'research-paper',
    title: 'Research Paper',
    description: 'Research paper manuscript summarizing novelty, methodology, and evaluation outcomes.',
    status: 'Available',
    fileUrl: researchPaper,
  },
  {
    id: 'log-book',
    title: 'Log Book',
    description: 'Weekly project progress log containing completed tasks, blockers, and milestone updates.',
    status: 'Available',
    fileUrl: logBook,
  },
  {
    id: 'ui-ux-video-link',
    title: 'UI/UX Demo Video Link',
    description: 'Reference link to the UI/UX demonstration video submission for PP2 checklist.',
    status: 'Available',
    fileUrl: uiUxVideoLink,
  },
  {
    id: 'git-repo-link',
    title: 'Git Repository Link',
    description: 'Reference link file containing the SmartTask project repository URL used for PP1 checklist.',
    status: 'Available',
    fileUrl: gitRepoLink,
  },
];

export default documents;
