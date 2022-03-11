import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { aboutSection } from '../../../pages';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import SkillBrief from './SkillBrief';

const About = () => {
  const aboutSectionHasBeenDisplayed = useSelector(
    state => state.sections.sectionHasBeenDisplayed[aboutSection]
  );

  return (
    <SectionContainer section={aboutSection} className='bg-white'>
      <div className='flex h-full'>
        <div className='flex justify-end basis-5/12'>
          <div className='flex flex-col justify-center basis-3/4 gap-20'>
            {['coding', 'templateSkill', 'templateSkill'].map((skill, i) => (
              <SkillBrief key={`${skill}${i}`} skill={skill} position={i + 1} />
            ))}
          </div>
        </div>
        <CSSTransition
          mountOnEnter
          in={aboutSectionHasBeenDisplayed}
          timeout={1000}
          classNames={{ enterActive: 'animate-fade-in' }}
        >
          <div className='basis-7/12 flex justify-center items-center'>
            <div className='basis-2/3'>
              <Title className='2xl:leading-tight'>
                Turning
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500'>
                  &#160;your vision&#160;
                </span>
                into reality
              </Title>
            </div>
          </div>
        </CSSTransition>
      </div>
    </SectionContainer>
  );
};

export default About;
