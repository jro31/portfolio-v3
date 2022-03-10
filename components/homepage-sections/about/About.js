import { aboutSection } from '../../../pages';
import Heading from '../../ui/text/Heading';
import SectionContainer from '../SectionContainer';
import SkillBrief from './SkillBrief';

const About = () => {
  return (
    <SectionContainer section={aboutSection} className='bg-white'>
      <div className='flex h-full'>
        <div className='flex justify-center basis-1/2'>
          <div className='flex flex-col justify-center basis-3/4'>
            <SkillBrief skill='coding' />
            <SkillBrief skill='templateSkill' />
            <SkillBrief skill='templateSkill' />
          </div>
        </div>
        <div className='basis-1/2'></div>
      </div>
    </SectionContainer>
  );
};

export default About;
