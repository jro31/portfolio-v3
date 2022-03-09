import useScrollTo from '../../../hooks/useScrollTo';
import SubtleLink from '../../ui/navigation/SubtleLink';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import { introductionSection, sectionOrder } from '../../../pages';

const Introduction = () => {
  const scrollTo = useScrollTo();

  return (
    <SectionContainer section={introductionSection} className='bg-black'>
      <div className='flex flex-col lg:flex-row w-full h-full'>
        <div className='flex justify-center lg:justify-end lg:basis-1/2'>
          <div className='flex flex-col justify-around lg:basis-3/4'>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col gap-2'>
                <Title className='text-white animate-zoom-down-in'>Jethro Williams</Title>
                <Title className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-zoom-down-in'>
                  Software Engineer
                </Title>
              </div>
              <div className='hidden lg:flex'>
                <div className='text-slate-600 text-xl uppercase animate-slide-fade-up-delayed basis-2/3 leading-10'>
                  This is some really inspirational text about some thing or whatever.
                </div>
              </div>
            </div>
            <div>
              <SubtleLink
                arrow
                underline
                background='dark'
                onClick={() => scrollTo(sectionOrder[1])}
              >
                Find out more
              </SubtleLink>
            </div>
          </div>
        </div>
        <div className='basis-1/2 h-inherit'>
          <img
            src='/images/self-portrait.jpeg'
            alt='Self-portrait'
            className='h-inherit w-full object-contain animate-slow-fade-in'
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;
