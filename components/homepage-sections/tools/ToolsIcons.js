import BitbucketIcon from '../../ui/svg/BitBucketIcon';
import CssIcon from '../../ui/svg/CssIcon';
import GithubIcon from '../../ui/svg/GithubIcon';
import GitIcon from '../../ui/svg/GitIcon';
import HtmlIcon from '../../ui/svg/HtmlIcon';
import JavascriptIcon from '../../ui/svg/JavascriptIcon';
import JQueryIcon from '../../ui/svg/JQueryIcon';
import NextJsIcon from '../../ui/svg/NextJsIcon';
import RailsIcon from '../../ui/svg/RailsIcon';
import ReactIcon from '../../ui/svg/ReactIcon';
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
      <ToolsIconContainer>
        <JQueryIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <HtmlIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <CssIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <JavascriptIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <ReactIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <GitIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <NextJsIcon color={iconColor} />
      </ToolsIconContainer>
      {/* TODO - Postgres, Rspec, Redux Toolkit */}
      {/* Optionally - Bootstrap, VS Code, Sublime */}
    </div>
  );
};

export default ToolsIcons;
