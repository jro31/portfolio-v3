import BitbucketIcon from '../../ui/svg/BitBucketIcon';
import CloudinaryIcon from '../../ui/svg/CloudinaryIcon';
import CssIcon from '../../ui/svg/CssIcon';
import GithubIcon from '../../ui/svg/GithubIcon';
import GitIcon from '../../ui/svg/GitIcon';
import HamlIcon from '../../ui/svg/HamlIcon';
import HtmlIcon from '../../ui/svg/HtmlIcon';
import JavascriptIcon from '../../ui/svg/JavascriptIcon';
import JQueryIcon from '../../ui/svg/JQueryIcon';
import NetlifyIcon from '../../ui/svg/NetlifyIcon';
import NextJsIcon from '../../ui/svg/NextJsIcon';
import PostgreSqlIcon from '../../ui/svg/PostgreSqlIcon';
import RailsIcon from '../../ui/svg/RailsIcon';
import ReactIcon from '../../ui/svg/ReactIcon';
import ReduxToolkitIcon from '../../ui/svg/ReduxToolkitIcon';
import RspecIcon from '../../ui/svg/RspecIcon';
import RubyIcon from '../../ui/svg/RubyIcon';
import S3Icon from '../../ui/svg/S3Icon';
import SublimeIcon from '../../ui/svg/SublimeIcon';
import TailwindIcon from '../../ui/svg/TailwindIcon';
import VercelIcon from '../../ui/svg/VercelIcon';
import ToolsIconContainer from './ToolsIconContainer';

const ToolsIcons = () => {
  const iconColor = 'rgb(71 85 105)';

  return (
    <div className='flex'>
      {/* TODO - Remember to add titles to each icon */}
      {/* TODO - Can you make each SVG a different color, and transition them periodically to other colors? */}
      {/* Probably give the container a class and add a wildcard transition to all child elements in the global css */}
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
      <ToolsIconContainer>
        <PostgreSqlIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <RspecIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <ReduxToolkitIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <HamlIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <SublimeIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <S3Icon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <NetlifyIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <VercelIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <CloudinaryIcon color={iconColor} />
      </ToolsIconContainer>
      {/* TODO - Add - Bootstrap, VS Code, erb, Heroku, Sass, Scss, React Transition Group */}
    </div>
  );
};

export default ToolsIcons;
