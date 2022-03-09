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
        <div className='relative basis-1/2 h-inherit bg-gradient-radial from-blue-500 via-blue-900 to-black'>
          <div className='absolute h-full w-full flex flex-col'>
            <div className='basis-1/3 grow-0 shrink-0 flex'>
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-tl from-transparent via-black to-black' />
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-t from-transparent to-black' />
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-tr from-transparent via-black to-black' />
            </div>
            <div className='basis-1/3 grow-0 shrink-0 flex'>
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-l from-transparent to-black' />
              <div className='basis-1/3 grow-0 shrink-0 bg-transparent' />
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-r from-transparent to-black' />
            </div>
            <div className='basis-1/3 grow-0 shrink-0 flex'>
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-bl from-transparent via-black to-black' />
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-b from-transparent to-black' />
              <div className='basis-1/3 grow-0 shrink-0 z-10 bg-gradient-to-br from-transparent via-black to-black' />
            </div>
          </div>
          <img
            src='/images/self-portrait.png'
            alt='Self-portrait'
            className='h-inherit w-full object-contain animate-slow-fade-in'
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;
