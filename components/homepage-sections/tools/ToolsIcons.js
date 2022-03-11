import BitbucketIcon from '../../ui/svg/BitBucketIcon';
import GithubIcon from '../../ui/svg/GithubIcon';
import ToolsIconContainer from './ToolsIconContainer';

const ToolsIcons = () => {
  const iconColor = 'rgb(71 85 105)';

  return (
    <div className='flex'>
      <ToolsIconContainer>
        <GithubIcon color={iconColor} />
      </ToolsIconContainer>
      <ToolsIconContainer>
        <BitbucketIcon color={iconColor} />
      </ToolsIconContainer>
    </div>
  );
};

export default ToolsIcons;
