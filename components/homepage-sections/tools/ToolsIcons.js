import BitbucketIcon from '../../ui/svg/BitBucketIcon';
import BootstrapIcon from '../../ui/svg/BootstrapIcon';
import CloudinaryIcon from '../../ui/svg/CloudinaryIcon';
import CssIcon from '../../ui/svg/CssIcon';
import GitHubIcon from '../../ui/svg/GitHubIcon';
import GitIcon from '../../ui/svg/GitIcon';
import HamlIcon from '../../ui/svg/HamlIcon';
import HerokuIcon from '../../ui/svg/HerokuIcon';
import HtmlIcon from '../../ui/svg/HtmlIcon';
import JavascriptIcon from '../../ui/svg/JavascriptIcon';
import JQueryIcon from '../../ui/svg/JQueryIcon';
import NetlifyIcon from '../../ui/svg/NetlifyIcon';
import NextJsIcon from '../../ui/svg/NextJsIcon';
import PostgreSqlIcon from '../../ui/svg/PostgreSqlIcon';
import RailsIcon from '../../ui/svg/RailsIcon';
import ReactIcon from '../../ui/svg/ReactIcon';
import ReduxToolkitIcon from '../../ui/svg/ReduxToolkitIcon';
import RSpecIcon from '../../ui/svg/RSpecIcon';
import RubyIcon from '../../ui/svg/RubyIcon';
import S3Icon from '../../ui/svg/S3Icon';
import SassIcon from '../../ui/svg/SassIcon';
import SublimeIcon from '../../ui/svg/SublimeIcon';
import TailwindIcon from '../../ui/svg/TailwindIcon';
import VercelIcon from '../../ui/svg/VercelIcon';
import VSCodeIcon from '../../ui/svg/VSCodeIcon';
import ToolsIconContainer from './ToolsIconContainer';
import ToolsIconsSection from './ToolsIconsSection';

const ToolsIcons = () => {
  const iconColor = 'rgb(71 85 105)';

  return (
    <div className='overflow-x-scroll w-full'>
      <div className='flex gap-5 w-full'>
        {/* TODO - Can you make each SVG a different color, and transition them periodically to other colors? */}
        {/* Probably give the container a class and add a wildcard transition to all child elements in the global css */}
        <ToolsIconsSection name='Languages'>
          <ToolsIconContainer name='Ruby'>
            <RubyIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='JavaScript'>
            <JavascriptIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='HTML'>
            <HtmlIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='CSS'>
            <CssIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Haml'>
            <HamlIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='jQuery'>
            <JQueryIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='Libraries/Frameworks'>
          <ToolsIconContainer name='Ruby on Rails'>
            <RailsIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='React'>
            <ReactIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Next.js'>
            <NextJsIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='Version control'>
          <ToolsIconContainer name='Git'>
            <GitIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='GitHub'>
            <GitHubIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Bitbucket'>
            <BitbucketIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='Styling'>
          <ToolsIconContainer name='Tailwind CSS'>
            <TailwindIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Bootstrap'>
            <BootstrapIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Sass'>
            <SassIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='Hosting'>
          <ToolsIconContainer name='Heroku'>
            <HerokuIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Vercel'>
            <VercelIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Netlify'>
            <NetlifyIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='File storage'>
          <ToolsIconContainer name='S3'>
            <S3Icon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Cloudinary'>
            <CloudinaryIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='Data'>
          <ToolsIconContainer name='PostgreSQL'>
            <PostgreSqlIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='Coding'>
          <ToolsIconContainer name='VS Code'>
            <VSCodeIcon color={iconColor} />
          </ToolsIconContainer>
          <ToolsIconContainer name='Sublime Text'>
            <SublimeIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='Testing'>
          <ToolsIconContainer name='RSpec'>
            <RSpecIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        <ToolsIconsSection name='State management'>
          <ToolsIconContainer name='Redux Toolkit'>
            <ReduxToolkitIcon color={iconColor} />
          </ToolsIconContainer>
        </ToolsIconsSection>

        {/* TODO - Optionally add - erb, Scss, React Transition Group */}
      </div>
    </div>
  );
};

export default ToolsIcons;
