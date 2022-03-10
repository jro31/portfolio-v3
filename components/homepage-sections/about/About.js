import { aboutSection } from '../../../pages';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import SkillBrief from './SkillBrief';

const About = () => {
  return (
    <SectionContainer section={aboutSection} className='bg-white'>
      <div className='flex h-full'>
        <div className='flex justify-end basis-1/2'>
          <div className='flex flex-col justify-center basis-3/4 gap-20'>
            {['coding', 'templateSkill', 'templateSkill'].map((skill, i) => (
              <SkillBrief key={`${skill}${i}`} skill={skill} position={i + 1} />
            ))}
          </div>
        </div>
        <div className='basis-1/2 flex justify-center items-center'>
          <div className='basis-2/3'>
            <Title className='2xl:leading-tight'>
              Turning your
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500'>
                &#160;dreams&#160;
              </span>
              into reality
            </Title>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
