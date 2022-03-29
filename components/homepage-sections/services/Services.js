import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { servicesSection, servicesPoints, servicesTitle } from '../../../pages';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import SkillBrief from './SkillBrief';
import useElementRef from '../../../hooks/useElementRef';

export const coding = 'coding';
export const featureBuilding = 'feature-building';
export const codebaseMaintenance = 'codebase-maintenance';
const points = [coding, featureBuilding, codebaseMaintenance];

const Services = () => {
  const titleHasBeenInView = useSelector(
    state => state.elementIsInView.hasBeenInView[servicesTitle]
  );
  const elementRef = useElementRef();

  return (
    <SectionContainer section={servicesSection} className='bg-white'>
      <div className='flex flex-col lg:flex-row gap-6 xs:gap-16 lg:gap-0 min-h-inherit lg:h-full'>
        <div className='lg:order-last lg:basis-7/12 flex justify-center lg:items-center'>
          <div
            ref={elementRef(servicesTitle)}
            className='basis-3/4 lg:basis-2/3 text-center lg:text-left'
          >
            <CSSTransition
              in={titleHasBeenInView}
              timeout={1000}
              classNames={{ enterActive: 'animate-fade-in' }}
            >
              <Title className='2xl:leading-tight'>
                Turning
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500'>
                  &#160;your vision&#160;
                </span>
                into reality
              </Title>
            </CSSTransition>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end lg:basis-5/12'>
          <div
            ref={elementRef(servicesPoints)}
            className='flex flex-col justify-center lg:justify-around basis-5/6 xs:basis-3/4 gap-20 lg:gap-0'
          >
            {points.map((skill, i) => (
              <SkillBrief key={`${skill}${i}`} skill={skill} position={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;
