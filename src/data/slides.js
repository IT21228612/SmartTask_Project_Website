import proposalSlides from '../project_files/Proposal_Presentation.pdf';
import pp1Slides from '../project_files/PP1_Slides_IT21228612.pdf';
import pp2Slides from '../project_files/PP2_Slides_IT21228612.pdf';
import finalSlides from '../project_files/final_presentation_Slides_IT21228612.pdf';

const slides = [
  {
    id: 'proposal-presentation',
    title: 'Proposal Presentation',
    description:
      'This presentation summarizes the SmartTask problem, solution overview, system design, implementation progress, and commercialization potential.',
    status: 'Available',
    fileUrl: proposalSlides,
  },
  {
    id: 'progress-presentation-1',
    title: 'Progress Presentation 1',
    description: 'This deck explains early findings, architecture direction, and initial design validation for SmartTask.',
    status: 'Available',
    fileUrl: pp1Slides,
  },
  {
    id: 'progress-presentation-2',
    title: 'Progress Presentation 2',
    description: 'This deck presents implementation updates, revised workflow, and intermediate testing outcomes.',
    status: 'Available',
    fileUrl: pp2Slides,
  },
  {
    id: 'final-presentation',
    title: 'Final Presentation',
    description: 'This deck presents the completed MVP, testing results, limitations, and future enhancement plan.',
    status: 'Available',
    fileUrl: finalSlides,
  },
];

export default slides;
