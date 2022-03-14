import ToolsIconsSection from './ToolsIconsSection';

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

const ToolsIcons = () => {
  return (
    <div className='overflow-x-scroll w-full'>
      <div className='flex gap-5 w-full'>
        {/* TODO - Can you make each SVG a different color, and transition them periodically to other colors? */}
        {/* Probably give the container a class and add a wildcard transition to all child elements in the global css */}
        <ToolsIconsSection name={languages} />
        <ToolsIconsSection name={librariesAndFrameworks} />
        <ToolsIconsSection name={versionControl} />
        <ToolsIconsSection name={styling} />
        <ToolsIconsSection name={hosting} />
        <ToolsIconsSection name={fileStorage} />
        <ToolsIconsSection name={dataString} />
        <ToolsIconsSection name={coding} />
        <ToolsIconsSection name={testing} />
        <ToolsIconsSection name={stateManagement} />

        {/* TODO - Optionally add - erb, Scss, React Transition Group */}
      </div>
    </div>
  );
};

export default ToolsIcons;
