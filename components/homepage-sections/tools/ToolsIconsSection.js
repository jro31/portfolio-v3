import { useState } from 'react';

import ToolsIconContainer from './ToolsIconContainer';
import {
  coding,
  dataString,
  fileStorage,
  hosting,
  languages,
  librariesAndFrameworks,
  stateManagement,
  styling,
  testing,
  versionControl,
} from './ToolsIcons';

import { defaultTextColorClass } from './ToolsIconContainer';

export const ruby = 'Ruby';
export const javaScript = 'JavaScript';
export const html = 'HTML';
export const css = 'CSS';
export const haml = 'Haml';
export const jQuery = 'jQuery';

export const rubyOnRails = 'Ruby on Rails';
export const reactString = 'React';
export const nextJS = 'Next.js';

export const git = 'Git';
export const gitHub = 'Github';
export const bitbucket = 'Bitbucket';

export const tailwindCSSString = 'Tailwind CSS';
export const bootstrap = 'Bootstrap';
export const sass = 'Sass';

export const heroku = 'Heroku';
export const vercel = 'Vercel';
export const netlify = 'Netlify';

export const s3 = 'S3';
export const cloudinary = 'Cloudinary';

export const postgreSQL = 'PostgreSQL';

export const vSCode = 'VS Code';
export const sublimeText = 'Sublime Text';

export const rSpec = 'RSpec';

export const reduxToolkit = 'Redux Toolkit';

const ToolsIconsSection = props => {
  const [sectionNameColorClass, setSectionNameColorClass] = useState(defaultTextColorClass);

  const iconNames = () => {
    switch (props.name) {
      case languages:
        return [ruby, javaScript, html, css, haml, jQuery];
      case librariesAndFrameworks:
        return [rubyOnRails, reactString, nextJS];
      case versionControl:
        return [git, gitHub, bitbucket];
      case styling:
        return [tailwindCSSString, bootstrap, sass];
      case hosting:
        return [heroku, vercel, netlify];
      case fileStorage:
        return [s3, cloudinary];
      case dataString:
        return [postgreSQL];
      case coding:
        return [vSCode, sublimeText];
      case testing:
        return [rSpec];
      case stateManagement:
        return [reduxToolkit];
      default:
        throw new Error(`Unrecognised name '${props.name}' passed to ToolsIconsSection`);
    }
  };

  return (
    <div className='flex flex-col justify-between px-2 lg:px-5 first:pl-0 last:pr-10'>
      <div className={sectionNameColorClass}>{props.name}</div>
      <div className='flex'>
        {iconNames().map(iconName => (
          <ToolsIconContainer
            key={`${iconName}-icon-container`}
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
