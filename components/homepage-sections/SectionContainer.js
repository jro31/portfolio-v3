import useSectionRef from '../../hooks/useSectionRef';

const SectionContainer = props => {
  const sectionRef = useSectionRef();

  return (
    <div
      className={`min-h-screen lg:h-screen box-border lg:snap-start ${props.className || ''}`} // TODO - 'min-h-screen' class is just here for testing; can be removed
      ref={sectionRef(props.section)}
    >
      <div className='pt-mobile-navbar-height lg:pt-navbar-height h-full w-full'>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
