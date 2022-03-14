import { useState } from 'react';
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

import {
  bitbucket,
  bootstrap,
  cloudinary,
  css,
  git,
  gitHub,
  haml,
  heroku,
  html,
  javaScript,
  jQuery,
  netlify,
  nextJS,
  postgreSQL,
  reactString,
  reduxToolkit,
  rSpec,
  ruby,
  rubyOnRails,
  s3,
  sass,
  sublimeText,
  tailwindCSSString,
  vercel,
  vSCode,
} from './ToolsIconsSection';

const ToolsIconContainer = props => {
  const defaultIconColor = 'rgb(71 85 105)';
  const [iconColor, setIconColor] = useState(defaultIconColor);

  const iconComponent = () => {
    switch (props.iconName) {
      case ruby:
        return <RubyIcon color={iconColor} />;
      case javaScript:
        return <JavascriptIcon color={iconColor} />;
      case html:
        return <HtmlIcon color={iconColor} />;
      case css:
        return <CssIcon color={iconColor} />;
      case haml:
        return <HamlIcon color={iconColor} />;
      case jQuery:
        return <JQueryIcon color={iconColor} />;
      case rubyOnRails:
        return <RailsIcon color={iconColor} />;
      case reactString:
        return <ReactIcon color={iconColor} />;
      case nextJS:
        return <NextJsIcon color={iconColor} />;
      case git:
        return <GitIcon color={iconColor} />;
      case gitHub:
        return <GitHubIcon color={iconColor} />;
      case bitbucket:
        return <BitbucketIcon color={iconColor} />;
      case tailwindCSSString:
        return <TailwindIcon color={iconColor} />;
      case bootstrap:
        return <BootstrapIcon color={iconColor} />;
      case sass:
        return <SassIcon color={iconColor} />;
      case heroku:
        return <HerokuIcon color={iconColor} />;
      case vercel:
        return <VercelIcon color={iconColor} />;
      case netlify:
        return <NetlifyIcon color={iconColor} />;
      case s3:
        return <S3Icon color={iconColor} />;
      case cloudinary:
        return <CloudinaryIcon color={iconColor} />;
      case postgreSQL:
        return <PostgreSqlIcon color={iconColor} />;
      case vSCode:
        return <VSCodeIcon color={iconColor} />;
      case sublimeText:
        return <SublimeIcon color={iconColor} />;
      case rSpec:
        return <RSpecIcon color={iconColor} />;
      case reduxToolkit:
        return <ReduxToolkitIcon color={iconColor} />;
      default:
        throw new Error(`Unrecognised icon name '${props.iconName}' passed to ToolsIconsSection`);
    }
  };

  const mouseOverHandler = () => {
    setIconColor('white');
  };

  const mouseOutHandler = () => {
    setIconColor(defaultIconColor);
  };

  return (
    <div
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      className='flex flex-col gap-3 text-slate-600 hover:text-white h-40'
    >
      <div className='h-20 w-20'>{iconComponent()}</div>
      <div className='text-center'>{props.iconName}</div>
    </div>
  );
};

export default ToolsIconContainer;
