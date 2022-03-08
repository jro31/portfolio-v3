import { sectionOrder } from '../../pages';

const SectionContainer = props => {
  const sectionId = () => {
    if (!sectionOrder.includes(props.section))
      throw new Error('Unknown section passed to SectionContainer');

    return props.section;
  };

  return (
    <div
      id={sectionId()}
      className={`lg:h-screen box-border lg:snap-start ${props.className || ''}`}
    >
      <div className='pt-mobile-navbar-height lg:pt-navbar-height h-full w-full'>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
