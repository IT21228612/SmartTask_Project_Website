import { getAvailability } from './projectFiles';

const slides = [
  {
    id: 'proposal-presentation',
    title: 'Proposal Presentation',
    description:
      'This presentation summarizes the SmartTask problem, solution overview, system design, implementation progress, and commercialization potential.',
    ...getAvailability('Proposal_Presentation.pdf'),
  },
  {
    id: 'progress-presentation-1',
    title: 'Progress Presentation 1',
    description: 'This deck explains early findings, architecture direction, and initial design validation for SmartTask.',
    ...getAvailability('PP1_Slides_IT21228612.pdf'),
  },
  {
    id: 'progress-presentation-2',
    title: 'Progress Presentation 2',
    description: 'This deck presents implementation updates, revised workflow, and intermediate testing outcomes.',
    ...getAvailability('PP2_Slides_IT21228612.pdf'),
  },
  {
    id: 'final-presentation',
    title: 'Final Presentation',
    description: 'This deck presents the completed MVP, testing results, limitations, and future enhancement plan.',
    ...getAvailability('final_presentation_Slides_IT21228612.pdf'),
  },
];

export default slides;
