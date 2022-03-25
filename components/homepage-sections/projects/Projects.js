import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import SectionContainer from '../SectionContainer';
import { projectsCards, projectsSection, projectsTitle } from '../../../pages';
import Title from '../../ui/text/Title';
import ProjectCard from './ProjectCard';
import useElementRef from '../../../hooks/useElementRef';

export const mealsOfChange = 'meals-of-change';
export const wheresJethro = 'wheres-jethro';
export const blocksFalling = 'blocks-falling';
const projectsOrder = [mealsOfChange, wheresJethro, blocksFalling];

const Projects = () => {
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[projectsTitle]
  );
  const projectCardsHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[projectsCards]
  );
  const elementRef = useElementRef();

  return (
    <SectionContainer
      section={projectsSection}
      className='bg-gradient-to-bl from-slate-800 via-black to-slate-800 text-white'
    >
      <div className='flex flex-col justify-around min-h-screen lg:min-h-0 w-full h-full gap-5'>
        <div className='flex w-full justify-end basis-1/12 shrink-0'>
          <div ref={elementRef(projectsTitle)} className='basis-11/12'>
            <CSSTransition
              mountOnEnter
              in={titleHasBeenInView}
              timeout={1000}
              classNames={{ enterActive: 'animate-fade-in' }}
            >
              <Title>Projects</Title>
            </CSSTransition>
          </div>
        </div>
        <div ref={elementRef(projectsCards)} className='flex basis-11/12 min-h-[80vh] lg:min-h-0'>
          <CSSTransition
            mountOnEnter
            in={projectCardsHasBeenInView}
            timeout={1500}
            classNames={{ enterActive: 'animate-delayed-fade-in-1' }}
          >
            <div className='flex overflow-x-scroll snap-x snap-mandatory scroll-smooth px-1/12 pb-6'>
              {projectsOrder.map(project => (
                <ProjectCard key={`${project}-project`} project={project} />
              ))}
            </div>
          </CSSTransition>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
