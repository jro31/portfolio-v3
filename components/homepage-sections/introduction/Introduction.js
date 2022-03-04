import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';

const Introduction = () => {
  return (
    <SectionContainer className='bg-black'>
      <div className='flex w-full h-full'>
        <div className='flex flex-col items-center basis-1/2 gap-5 pt-20'>
          <Title className='text-white animate-zoom-down-in'>Jethro Williams</Title>
          <Title className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-zoom-up-in-delayed'>
            Software Engineer
          </Title>
          <div className='text-slate-600 text-xl uppercase text-center animate-slide-fade-up-delayed'>
            This is some really inspirational text about some thing or whatever.
          </div>
        </div>
        <div className='basis-1/2 h-inherit'>
          <img
            src='/images/self-portrait.jpeg'
            alt='Self-portrait'
            className='h-inherit w-full object-contain'
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;
