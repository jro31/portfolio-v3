import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import BitbucketIcon from '../../ui/svg/BitbucketIcon';
import BootstrapIcon from '../../ui/svg/BootstrapIcon';
import CloudinaryIcon from '../../ui/svg/CloudinaryIcon';
import CssIcon from '../../ui/svg/CssIcon';
import FirebaseIcon from '../../ui/svg/FirebaseIcon';
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
import SendGridIcon from '../../ui/svg/SendGridIcon';
import SublimeIcon from '../../ui/svg/SublimeIcon';
import TailwindIcon from '../../ui/svg/TailwindIcon';
import VercelIcon from '../../ui/svg/VercelIcon';
import VSCodeIcon from '../../ui/svg/VSCodeIcon';

import {
  bitbucket,
  bootstrap,
  cloudinary,
  css,
  firebase,
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
  sendGrid,
  sublimeText,
  tailwindCSSString,
  vercel,
  vSCode,
} from './ToolsIconsSection';

export const defaultTextColorClass = 'text-slate-600';

const ToolsIconContainer = props => {
  const defaultIconColor = 'rgb(71 85 105)';
  const hoverIconColor = 'white';
  const hoverTextColorClass = 'text-white';
  const [iconColor, setIconColor] = useState(defaultIconColor);
  const [textColorClass, setTextColorClass] = useState(defaultTextColorClass);

  const iconComponent = () => {
    switch (props.iconName) {
      case bitbucket:
        return <BitbucketIcon color={iconColor} />;
      case bootstrap:
        return <BootstrapIcon color={iconColor} />;
      case cloudinary:
        return <CloudinaryIcon color={iconColor} />;
      case css:
        return <CssIcon color={iconColor} />;
      case firebase:
        return <FirebaseIcon color={iconColor} />;
      case git:
        return <GitIcon color={iconColor} />;
      case gitHub:
        return <GitHubIcon color={iconColor} />;
      case haml:
        return <HamlIcon color={iconColor} />;
      case heroku:
        return <HerokuIcon color={iconColor} />;
      case html:
        return <HtmlIcon color={iconColor} />;
      case javaScript:
        return <JavascriptIcon color={iconColor} />;
      case jQuery:
        return <JQueryIcon color={iconColor} />;
      case netlify:
        return <NetlifyIcon color={iconColor} />;
      case nextJS:
        return <NextJsIcon color={iconColor} />;
      case postgreSQL:
        return <PostgreSqlIcon color={iconColor} />;
      case reactString:
        return <ReactIcon color={iconColor} />;
      case reduxToolkit:
        return <ReduxToolkitIcon color={iconColor} />;
      case rSpec:
        return <RSpecIcon color={iconColor} />;
      case ruby:
        return <RubyIcon color={iconColor} />;
      case rubyOnRails:
        return <RailsIcon color={iconColor} />;
      case s3:
        return <S3Icon color={iconColor} />;
      case sass:
        return <SassIcon color={iconColor} />;
      case sendGrid:
        return <SendGridIcon color={iconColor} />;
      case sublimeText:
        return <SublimeIcon color={iconColor} />;
      case tailwindCSSString:
        return <TailwindIcon color={iconColor} />;
      case vercel:
        return <VercelIcon color={iconColor} />;
      case vSCode:
        return <VSCodeIcon color={iconColor} />;
      default:
        throw new Error(`Unrecognised icon name '${props.iconName}' passed to ToolsIconsSection`);
    }
  };

  const touchStartHandler = () => {
    mouseOverHandler();
  };

  const mouseOverHandler = () => {
    if (iconColor !== hoverIconColor) setIconColor(hoverIconColor);
    if (textColorClass !== hoverTextColorClass) setTextColorClass(hoverTextColorClass);
    if (props.sectionNameColorClass !== hoverTextColorClass)
      props.setSectionNameColorClass(hoverTextColorClass);
  };

  const touchCancelHandler = () => {
    touchEndHandler();
  };

  const touchEndHandler = () => {
    mouseOutHandler();
  };

  const mouseOutHandler = () => {
    if (iconColor !== defaultIconColor) setIconColor(defaultIconColor);
    if (textColorClass !== defaultTextColorClass) setTextColorClass(defaultTextColorClass);
    if (props.sectionNameColorClass !== defaultTextColorClass)
      props.setSectionNameColorClass(defaultTextColorClass);
  };

  return (
    // NICETOHAVE - Perhaps add an angelic background to each icon on hover
    <CSSTransition in={props.in} timeout={1000} classNames={{ enterActive: 'animate-fade-in' }}>
      <div
        onTouchStart={touchStartHandler}
        onTouchCancel={touchCancelHandler}
        onTouchEnd={touchEndHandler}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        className={`flex-col gap-3 h-40 px-2 lg:px-5 first:pl-0 last:pr-0 ${
          props.in ? 'flex' : 'hidden'
        }`}
      >
        <div className='h-16 lg:h-20 w-16 lg:w-20'>{iconComponent()}</div>
        <div className={`text-center ${textColorClass}`}>{props.iconName}</div>
      </div>
    </CSSTransition>
  );
};

export default ToolsIconContainer;
