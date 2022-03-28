import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { isMobile } from 'react-device-detect';

import SectionContainer from '../SectionContainer';
import { projectsCards, projectsSection, projectsTitle } from '../../../pages';
import Title from '../../ui/text/Title';
import ProjectCard from './ProjectCard';
import useElementRef from '../../../hooks/useElementRef';
import Pointer, { left, right } from '../../ui/navigation/Pointer';

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
  const [isHovering, setIsHovering] = useState(false);
  const projectsContainerRef = useRef();
  const elementRef = useElementRef();

  const scrollLeftHandler = () => {
    projectsContainerRef.current.scrollLeft =
      projectsContainerRef.current.scrollLeft - window.innerWidth * 0.7;
  };

  const scrollRightHandler = () => {
    projectsContainerRef.current.scrollLeft =
      projectsContainerRef.current.scrollLeft + window.innerWidth * 0.7;
  };

  const onHover = () => {
    if (!isMobile) {
      setIsHovering(true);
    }
  };

  const onLeaveHover = () => {
    if (!isMobile) {
      setIsHovering(false);
    }
  };

  return (
    <SectionContainer
      section={projectsSection}
      className='bg-gradient-to-bl from-slate-800 via-black to-slate-800 text-white'
    >
      <div className='flex flex-col justify-around min-h-screen lg:min-h-0 w-full h-full gap-5'>
        <div className='flex w-full justify-end basis-1/12 shrink-0'>
          <div ref={elementRef(projectsTitle)} className='basis-11/12'>
            <CSSTransition
              in={titleHasBeenInView}
              timeout={1000}
              classNames={{ enterActive: 'animate-fade-in' }}
            >
              <Title>Projects</Title>
            </CSSTransition>
          </div>
        </div>
        <div
          ref={elementRef(projectsCards)}
          onMouseEnter={onHover}
          onMouseLeave={onLeaveHover}
          className='flex basis-11/12 min-h-[80vh] lg:min-h-0 relative'
        >
          <Pointer direction={left} in={isHovering} onClick={scrollLeftHandler} />
          <Pointer direction={right} in={isHovering} onClick={scrollRightHandler} />
          <CSSTransition
            in={projectCardsHasBeenInView}
            timeout={1500}
            classNames={{ enterActive: 'animate-delayed-fade-in-1' }}
          >
            <div
              ref={projectsContainerRef}
              className='flex overflow-x-scroll snap-x snap-mandatory scroll-smooth px-1/12 mb-6'
            >
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
