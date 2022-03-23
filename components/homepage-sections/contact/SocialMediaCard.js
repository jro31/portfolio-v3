import EmailIcon from '../../ui/svg/EmailIcon';
import GitHubIcon from '../../ui/svg/GitHubIcon';
import LinkedInIcon from '../../ui/svg/LinkedInIcon';

import { email, gitHub, linkedIn } from './Contact';

const SocialMediaCard = props => {
  const defaultIconColor = 'rgb(71 85 105)';

  const platformDetails = () => {
    switch (props.platform) {
      case gitHub:
        return {
          url: 'https://github.com/jro31',
          icon: <GitHubIcon color={defaultIconColor} />,
          username: 'jro31',
        };
      case linkedIn:
        return {
          url: 'https://www.linkedin.com/in/jethrowilliams/',
          icon: <LinkedInIcon color={defaultIconColor} />,
          username: 'jethrowilliams',
        };
      case email:
        return {
          url: 'mai\u006Cto:contact\u0040jethrowilliams\u002Ec\u006Fm',
          icon: <EmailIcon color={defaultIconColor} />,
          username: 'contact\u0040jethrowilliams\u002Ec\u006Fm',
        };
      default:
        throw new Error(`Unrecognised platform '${props.platform}' passed to SocialMediaCard`);
    }
  };

  // TODO - Add hover animation
  return (
    <a href={platformDetails().url} target='_blank' rel='noreferrer'>
      <div>
        <div className='w-20 h-20'>{platformDetails().icon}</div>
        <div>{platformDetails().username}</div>
      </div>
    </a>
  );
};

export default SocialMediaCard;
