import tafDocument from '../project_files/TAF_25-26J-531.pdf';
import proposalReport from '../project_files/IT21228612_Proposal_Report_final_version.pdf';
import deploymentReport from '../project_files/deployment_report.pdf';
import finalThesisReport from '../project_files/Final_report.pdf';
import researchPaper from '../project_files/research_paper.pdf';

const documents = [
  {
    title: 'TAF – Topic Assessment Form',
    description: 'Formal topic assessment approved by the supervisor and examiner panel.',
    status: 'Available',
    fileUrl: tafDocument,
  },
  {
    title: 'Project Proposal Report',
    description: 'Proposal report describing the research problem, objectives, and proposed solution approach.',
    status: 'Available',
    fileUrl: proposalReport,
  },
  {
    title: 'Deployment Report',
    description: 'Report documenting deployment setup, environment configuration, and release details.',
    status: 'Available',
    fileUrl: deploymentReport,
  },
  {
    title: 'Final Report (Thesis)',
    description: 'Complete thesis report including system design, implementation, testing, and conclusions.',
    status: 'Available',
    fileUrl: finalThesisReport,
  },
  {
    title: 'Research Paper',
    description: 'Research paper manuscript summarizing novelty, methodology, and evaluation outcomes.',
    status: 'Available',
    fileUrl: researchPaper,
  },
];

export default documents;
