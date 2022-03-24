// TODO - Transition in elements

import SectionContainer from '../SectionContainer';
import { projectsSection } from '../../../pages';
import Title from '../../ui/text/Title';
import ProjectCard from './ProjectCard';

export const mealsOfChange = 'meals-of-change';
export const wheresJethro = 'wheres-jethro';
export const blocksFalling = 'blocks-falling';
const projectsOrder = [mealsOfChange, wheresJethro, blocksFalling];

const Projects = () => {
  return (
    <SectionContainer
      section={projectsSection}
      className='bg-gradient-to-bl from-slate-800 via-black to-slate-800 text-white'
    >
      <div className='flex flex-col justify-around min-h-screen lg:min-h-0 w-full h-full gap-5'>
        <div className='flex w-full justify-end basis-1/12 shrink-0'>
          <div className='basis-11/12'>
            <Title>Projects</Title>
          </div>
        </div>
        <div className='flex overflow-x-scroll snap-x snap-mandatory scroll-smooth basis-11/12 px-1/12 pb-6 min-h-[80vh] lg:min-h-0'>
          {projectsOrder.map(project => (
            <ProjectCard key={`${project}-project`} project={project} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
