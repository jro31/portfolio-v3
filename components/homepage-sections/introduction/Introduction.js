// TODO - Update the animations in this section to use CSS transitions?

import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import { introductionSection } from '../../../pages';
import Portrait from './Portrait';
import FindOutMoreLink from './FindOutMoreLink';
import Description from '../../ui/text/Description';

const Introduction = () => {
  return (
    <SectionContainer section={introductionSection} className='bg-black'>
      <div className='flex flex-col lg:flex-row w-full lg:h-full'>
        <div className='flex justify-center lg:justify-end lg:basis-1/2'>
          <div className='flex flex-col justify-around lg:basis-10/12'>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col lg:gap-2'>
                <Title className='text-white animate-zoom-down-in'>Jethro Williams</Title>
                <Title className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-zoom-down-in'>
                  Software Engineer
                </Title>
              </div>
              <div className='hidden lg:flex'>
                <Description uppercase className='animate-slide-fade-up-delayed basis-2/3'>
                  {/* TODO - Update this text */}
                  This is some really inspirational text about some thing or whatever.
                </Description>
              </div>
            </div>
            <FindOutMoreLink className='hidden lg:block' />
          </div>
        </div>
        <Portrait />
        <div className='flex justify-center my-5'>
          <FindOutMoreLink className='lg:hidden' />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;
