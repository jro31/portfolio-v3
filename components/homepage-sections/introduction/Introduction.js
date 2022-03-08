import useScrollTo from '../../../hooks/useScrollTo';
import SubtleLink from '../../ui/navigation/SubtleLink';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import { sectionOrder } from '../../../pages';

const Introduction = () => {
  const scrollTo = useScrollTo();

  return (
    <SectionContainer className='bg-black'>
      <div className='flex w-full h-full'>
        <div className='flex justify-end basis-1/2 pt-20'>
          <div className='flex flex-col justify-around'>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col gap-2'>
                <Title className='text-white animate-zoom-down-in'>Jethro Williams</Title>
                <Title className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-zoom-down-in'>
                  Software Engineer
                </Title>
              </div>
              <div className='flex'>
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

// box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
