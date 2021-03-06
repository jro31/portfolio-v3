import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { toolsDescription, toolsSection, toolsTitle } from '../../../pages';
import Description from '../../ui/text/Description';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import ToolsIcons from './ToolsIcons';
import useElementRef from '../../../hooks/useElementRef';

const Tools = () => {
  const titleHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[toolsTitle]);
  const descriptionHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[toolsDescription]
  );
  const elementRef = useElementRef();

  return (
    // NICETOHAVE - Can you make this background gradually change (something subtle; not too attention seeking)?
    <SectionContainer
      section={toolsSection}
      className='bg-gradient-to-br from-slate-800 via-black to-slate-800 text-white'
    >
      <div className='flex flex-col flex-1 items-end justify-between h-full w-full'>
        <div className='flex flex-col w-11/12 gap-6 lg:mt-4'>
          <div ref={elementRef(toolsTitle)}>
            <CSSTransition
              in={titleHasBeenInView}
              timeout={2000}
              classNames={{ enterActive: 'animate-slow-fade-in' }}
            >
              <Title className={titleHasBeenInView ? 'block' : 'hidden'}>Tools</Title>
            </CSSTransition>
          </div>
          <div ref={elementRef(toolsDescription)} className='pr-1/12'>
            <CSSTransition
              in={descriptionHasBeenInView}
              timeout={2000}
              classNames={{ enterActive: 'animate-slide-fade-up-delayed' }}
            >
              <Description
                className={`text-slate-600  md:w-2/3 lg:w-5/12 ${
                  descriptionHasBeenInView ? 'block' : 'hidden'
                }`}
              >
                I work primarily with Ruby on Rails and React/Next.js, using the tools necessary to
                bring them to life, including...
              </Description>
            </CSSTransition>
          </div>
        </div>
        <ToolsIcons />
      </div>
    </SectionContainer>
  );
};

export default Tools;
