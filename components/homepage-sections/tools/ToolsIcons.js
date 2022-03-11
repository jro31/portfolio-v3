import BitbucketIcon from '../../ui/svg/BitBucketIcon';
import GithubIcon from '../../ui/svg/GithubIcon';
import RailsIcon from '../../ui/svg/RailsIcon';
import RubyIcon from '../../ui/svg/RubyIcon';
import TailwindIcon from '../../ui/svg/TailwindIcon';
import ToolsIconContainer from './ToolsIconContainer';

const ToolsIcons = () => {
  const iconColor = 'rgb(71 85 105)';

  return (
    <div className='flex'>
      {/* TODO - Remember to add titles to each icon */}
      <ToolsIconContainer>
        <GithubIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <BitbucketIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <RubyIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <TailwindIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <RailsIcon color={iconColor} />
      </ToolsIconContainer>
      {/* TODO - jQuery, HTML, CSS, Javascript, Git, React, Next JS, Postgres, Rspec, Redux Toolkit */}
      {/* Optionally - Bootstrap, VS Code, Sublime */}
    </div>
  );
};

export default ToolsIcons;
