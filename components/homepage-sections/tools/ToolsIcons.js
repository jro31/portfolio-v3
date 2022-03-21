import ToolsIconsSection from './ToolsIconsSection';
import useElementRef from '../../../hooks/useElementRef';

import { toolsIcons } from '../../../pages';

export const languages = 'Languages';
export const librariesAndFrameworks = 'Libraries/Frameworks';
export const versionControl = 'Version control';
export const styling = 'Styling';
export const hosting = 'Hosting';
export const fileStorage = 'File storage';
export const dataString = 'Data';
export const coding = 'Coding';
export const testing = 'Testing';
export const stateManagement = 'State management';
export const toolsSectionsOrder = [
  languages,
  librariesAndFrameworks,
  versionControl,
  styling,
  hosting,
  fileStorage,
  dataString,
  coding,
  testing,
  stateManagement,
];

const ToolsIcons = () => {
  const elementRef = useElementRef();

  return (
    // TODO - Probably update this on mobile. Looks a bit shit.
    <div className='overflow-x-scroll w-full pl-1/12'>
      <div ref={elementRef(toolsIcons)} className='flex gap-5 w-full min-h-[208px]'>
        {/* TODO - Can you make each SVG a different color, and transition them periodically to other colors? */}
        {/* Probably give the container a class and add a wildcard transition to all child elements in the global css */}
        {toolsSectionsOrder.map(section => (
          <ToolsIconsSection key={`${section} section`} name={section} />
        ))}
        {/* TODO - Optionally add - erb, Scss, React Transition Group */}
      </div>
    </div>
  );
};

export default ToolsIcons;
