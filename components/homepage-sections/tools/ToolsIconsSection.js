import { useEffect, useState } from 'react';

import ToolsIconContainer from './ToolsIconContainer';
import {
  coding,
  dataString,
  email,
  fileStorage,
  hosting,
  languages,
  librariesAndFrameworks,
  stateManagement,
  styling,
  testing,
  versionControl,
  toolsSectionsOrder,
} from './ToolsIcons';

import { defaultTextColorClass } from './ToolsIconContainer';
import { useSelector } from 'react-redux';
import { toolsIcons } from '../../../pages';
import { CSSTransition } from 'react-transition-group';

export const bitbucket = 'Bitbucket';
export const bootstrap = 'Bootstrap';
export const cloudinary = 'Cloudinary';
export const css = 'CSS';
export const firebase = 'Firebase';
export const git = 'Git';
export const gitHub = 'Github';
export const haml = 'Haml';
export const heroku = 'Heroku';
export const html = 'HTML';
export const javaScript = 'JavaScript';
export const jQuery = 'jQuery';
export const netlify = 'Netlify';
export const nextJS = 'Next.js';
export const postgreSQL = 'PostgreSQL';
export const reactString = 'React';
export const reduxToolkit = 'Redux Toolkit';
export const rSpec = 'RSpec';
export const ruby = 'Ruby';
export const rubyOnRails = 'Ruby on Rails';
export const s3 = 'S3';
export const sass = 'Sass';
export const sendGrid = 'SendGrid';
export const sublimeText = 'Sublime Text';
export const tailwindCSSString = 'Tailwind CSS';
export const vercel = 'Vercel';
export const vSCode = 'VS Code';

const ToolsIconsSection = props => {
  const [sectionNameColorClass, setSectionNameColorClass] = useState(defaultTextColorClass);
  const [displayedIconsArray, setDisplayedIconsArray] = useState([]);
  const iconsHaveBeenInView = useSelector(state => state.elementIsInView.hasBeenInView[toolsIcons]);

  const iconNames = sectionName => {
    switch (sectionName) {
      case coding:
        return [vSCode, sublimeText];
      case dataString:
        return [postgreSQL];
      case email:
        return [sendGrid];
      case fileStorage:
        return [s3, cloudinary];
      case hosting:
        return [heroku, vercel, netlify, firebase];
      case languages:
        return [ruby, javaScript, html, css, haml, jQuery];
      case librariesAndFrameworks:
        return [rubyOnRails, reactString, nextJS];
      case stateManagement:
        return [reduxToolkit];
      case styling:
        return [tailwindCSSString, bootstrap, sass];
      case testing:
        return [rSpec];
      case versionControl:
        return [git, gitHub, bitbucket];
      default:
        throw new Error(`Unrecognised name '${props.name}' passed to ToolsIconsSection`);
    }
  };

  const iconOrder = () => {
    let returnArray = [];

    toolsSectionsOrder.map(section => returnArray.push(iconNames(section)));

    return returnArray.flat();
  };

  useEffect(() => {
    if (iconsHaveBeenInView) {
      iconOrder().map((icon, i) => {
        setTimeout(() => {
          setDisplayedIconsArray(prevState => [...prevState, icon]);
        }, 100 * i);
      });
    }
  }, [iconsHaveBeenInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='flex flex-col justify-between px-2 lg:px-5 first:pl-0 last:pr-10'>
      <CSSTransition
        mountOnEnter
        in={displayedIconsArray.includes(iconNames(props.name)[0])}
        timeout={1000}
        classNames={{ enterActive: 'animate-fade-in' }}
      >
        <div className={sectionNameColorClass}>{props.name}</div>
      </CSSTransition>
      <div className='flex'>
        {iconNames(props.name).map(iconName => (
          <ToolsIconContainer
            key={`${iconName}-icon-container`}
            in={displayedIconsArray.includes(iconName)}
            iconName={iconName}
            sectionNameColorClass={sectionNameColorClass}
            setSectionNameColorClass={setSectionNameColorClass}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsIconsSection;
