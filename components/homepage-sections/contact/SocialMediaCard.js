import { useState } from 'react';

import EmailIcon from '../../ui/svg/EmailIcon';
import GitHubIcon from '../../ui/svg/GitHubIcon';
import InstagramIcon from '../../ui/svg/InstagramIcon';
import LinkedInIcon from '../../ui/svg/LinkedInIcon';
import TwitterIcon from '../../ui/svg/TwitterIcon';

import { email, gitHub, instagram, linkedIn, twitter } from './Contact';

const SocialMediaCard = props => {
  const defaultPlatformColorClass = 'text-slate-900/50';
  const hoverPlatformColorClass = 'text-slate-700/50';
  const defaultUsernameColorClass = 'text-slate-500';
  const hoverUsernameColorClass = 'text-slate-400';
  const defaultIconColor = 'black';
  const hoverIconColor = 'rgb(30 41 59)';
  const [platformColorClass, setPlatformColorClass] = useState(defaultPlatformColorClass);
  const [usernameColorClass, setUsernameColorClass] = useState(defaultUsernameColorClass);
  const [iconColor, setIconColor] = useState(defaultIconColor);

  const platformDetails = () => {
    switch (props.platform) {
      case email:
        return {
          url: 'mai\u006Cto:contact\u0040jethrowilliams\u002Ec\u006Fm',
          icon: <EmailIcon color={iconColor} />,
          username: 'contact\u0040jethrowilliams\u002Ec\u006Fm',
        };
      case gitHub:
        return {
          url: 'https://github.com/jro31',
          icon: <GitHubIcon color={iconColor} />,
          username: 'jro31',
        };
      case instagram:
        return {
          url: 'https://www.instagram.com/jethro_31/',
          icon: <InstagramIcon color={iconColor} />,
          username: '@jethro_31',
        };
      case linkedIn:
        return {
          url: 'https://www.linkedin.com/in/jethrowilliams/',
          icon: <LinkedInIcon color={iconColor} />,
          username: 'jethrowilliams',
        };
      case twitter:
        return {
          url: 'https://twitter.com/jethro_williams',
          icon: <TwitterIcon color={iconColor} />,
          username: '@jethro_williams',
        };
      default:
        throw new Error(`Unrecognised platform '${props.platform}' passed to SocialMediaCard`);
    }
  };

  const touchStartHandler = () => {
    mouseOverHandler();
  };

  const mouseOverHandler = () => {
    if (platformColorClass !== hoverPlatformColorClass)
      setPlatformColorClass(hoverPlatformColorClass);
    if (usernameColorClass !== hoverUsernameColorClass)
      setUsernameColorClass(hoverUsernameColorClass);
    if (iconColor !== hoverIconColor) setIconColor(hoverIconColor);
  };

  const touchCancelHandler = () => {
    touchEndHandler();
  };

  const touchEndHandler = () => {
    mouseOutHandler();
  };

  const mouseOutHandler = () => {
    if (platformColorClass !== defaultPlatformColorClass)
      setPlatformColorClass(defaultPlatformColorClass);
    if (usernameColorClass !== defaultUsernameColorClass)
      setUsernameColorClass(defaultUsernameColorClass);
    if (iconColor !== defaultIconColor) setIconColor(defaultIconColor);
  };

  return (
    <a href={platformDetails().url} target='_blank' rel='noreferrer'>
      <div
        onTouchStart={touchStartHandler}
        onTouchCancel={touchCancelHandler}
        onTouchEnd={touchEndHandler}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        className='flex bg-slate-800 hover:bg-black border border-slate-800 rounded-xl p-2 gap-6'
      >
        <div className='w-16 h-16 grow-0'>{platformDetails().icon}</div>
        <div className='grow'>
          <div className={`text-2xl font-black ${platformColorClass}`}>{props.platform}</div>
          <div className={`text-lg font-medium italic tracking-wide ${usernameColorClass}`}>
            {platformDetails().username}
          </div>
        </div>
      </div>
    </a>
  );
};

export default SocialMediaCard;
