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
    // TODO - Can you make this background gradually change (something subtle; not too attention seeking)
    <SectionContainer
      section={toolsSection}
      className='bg-gradient-to-br from-slate-800 via-black to-slate-800 text-white'
    >
      <div className='flex flex-col items-end justify-around min-h-screen-minus-mobile-nav lg:min-h-screen-minus-nav h-full w-full'>
        <div className='flex flex-col w-11/12'>
          <div ref={elementRef(toolsTitle)}>
            <CSSTransition
              mountOnEnter
              in={titleHasBeenInView}
              timeout={2000}
              classNames={{ enterActive: 'animate-slow-fade-in' }}
            >
              <Title>Tools</Title>
            </CSSTransition>
          </div>
          <div ref={elementRef(toolsDescription)}>
            <CSSTransition
              mountOnEnter
              in={descriptionHasBeenInView}
              timeout={2000}
              classNames={{ enterActive: 'animate-slide-fade-up-delayed' }}
            >
              <Description>
                {/* TODO - Update this text */}I work primarily with Ruby on Rails and React/Next
                JS, blah, blah, blah
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
