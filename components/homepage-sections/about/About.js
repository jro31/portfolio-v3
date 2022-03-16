import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { aboutSection, aboutTitle, aboutSkills } from '../../../pages';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import SkillBrief from './SkillBrief';
import useElementRef from '../../../hooks/useElementRef';

export const coding = 'coding';
export const templateSkill = 'template-skill'; // TODO - Update this to actual skills
const skills = [coding, templateSkill, templateSkill];

const About = () => {
  const titleHasBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[aboutTitle]);
  const elementRef = useElementRef();

  return (
    <SectionContainer section={aboutSection} className='bg-white'>
      <div className='flex flex-col lg:flex-row gap-6 xs:gap-16 lg:gap-0 lg:h-full'>
        <div className='lg:order-last lg:basis-7/12 flex justify-center lg:items-center'>
          <div
            ref={elementRef(aboutTitle)}
            className='basis-3/4 lg:basis-2/3 text-center lg:text-left'
          >
            <CSSTransition
              mountOnEnter
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
            ref={elementRef(aboutSkills)}
            className='flex flex-col justify-center lg:justify-around basis-5/6 xs:basis-3/4 gap-20 lg:gap-0'
          >
            {skills.map((skill, i) => (
              <SkillBrief key={`${skill}${i}`} skill={skill} position={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
