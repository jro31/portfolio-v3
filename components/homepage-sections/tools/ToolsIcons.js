import ToolsIconsSection from './ToolsIconsSection';
import useElementRef from '../../../hooks/useElementRef';

import { toolsIcons } from '../../../pages';
import TrianglePointers from '../../ui/navigation/TrianglePointers';
import { useRef } from 'react';

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
  const iconsContainerRef = useRef();
  const elementRef = useElementRef();

  const scrollLeftHandler = () => {
    iconsContainerRef.current.scrollLeft =
      iconsContainerRef.current.scrollLeft - window.innerWidth * 0.5;
  };

  const scrollRightHandler = () => {
    iconsContainerRef.current.scrollLeft =
      iconsContainerRef.current.scrollLeft + window.innerWidth * 0.5;
  };

  return (
    // NICETOHAVE - Update this on mobile. Looks a bit shit.
    <div className='w-full relative'>
      <div className='absolute top-1 right-5'>
        {/* ESSENTIAL - These need to be transitioned in; currently they're the only thing in this section as you get here */}
        <TrianglePointers onClickLeft={scrollLeftHandler} onClickRight={scrollRightHandler} />
      </div>
      <div ref={iconsContainerRef} className='overflow-x-scroll w-full pl-1/12 scroll-smooth'>
        <div ref={elementRef(toolsIcons)} className='flex gap-5 w-full min-h-[208px]'>
          {/* NICETOHAVE - Can you make each SVG a different color, and transition them periodically to other colors? */}
          {/* Probably give the container a class and add a wildcard transition to all child elements in the global css */}
          {toolsSectionsOrder.map(section => (
            <ToolsIconsSection key={`${section} section`} name={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsIcons;
