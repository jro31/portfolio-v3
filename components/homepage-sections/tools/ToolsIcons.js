import ToolsIconsSection from './ToolsIconsSection';
import useElementRef from '../../../hooks/useElementRef';

import { toolsIcons } from '../../../pages';

export const coding = 'Coding';
export const dataString = 'Data';
export const email = 'Email';
export const fileStorage = 'File storage';
export const hosting = 'Hosting';
export const languages = 'Languages';
export const librariesAndFrameworks = 'Libraries/Frameworks';
export const stateManagement = 'State management';
export const styling = 'Styling';
export const testing = 'Testing';
export const versionControl = 'Version control';
export const toolsSectionsOrder = [
  languages,
  librariesAndFrameworks,
  versionControl,
  styling,
  hosting,
  fileStorage,
  dataString,
  email,
  coding,
  testing,
  stateManagement,
];

const ToolsIcons = () => {
  const elementRef = useElementRef();

  return (
    // ESSENTIAL - Probably update this on mobile. Looks a bit shit.
    <div className='overflow-x-scroll w-full pl-1/12'>
      <div ref={elementRef(toolsIcons)} className='flex gap-5 w-full min-h-[208px]'>
        {/* TODO - Can you make each SVG a different color, and transition them periodically to other colors? */}
        {/* Probably give the container a class and add a wildcard transition to all child elements in the global css */}
        {/* ESSENTIAL - Add pointers so this can be scrolled by clicking */}
        {toolsSectionsOrder.map(section => (
          <ToolsIconsSection key={`${section} section`} name={section} />
        ))}
      </div>
    </div>
  );
};

export default ToolsIcons;
