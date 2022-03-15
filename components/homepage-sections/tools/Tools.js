import { toolsSection } from '../../../pages';
import Description from '../../ui/text/Description';
import Title from '../../ui/text/Title';
import SectionContainer from '../SectionContainer';
import ToolsIcons from './ToolsIcons';

const Tools = () => {
  return (
    // TODO - Can you make this background gradually change (something subtle; not too attention seeking)
    <SectionContainer
      section={toolsSection}
      className='bg-gradient-to-br from-slate-800 via-black to-slate-800 text-white'
    >
      <div className='flex min-h-screen h-full w-full'>
        <div className='flex flex-col items-end grow-0 justify-around w-full'>
          <div className='flex flex-col w-11/12'>
            <Title>Tools</Title>
            <Description>
              {/* TODO - Update this text */}I work primarily with Ruby on Rails and React/Next JS,
              blah, blah, blah
            </Description>
          </div>
          <ToolsIcons />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Tools;
