import useSectionRef from '../../hooks/useSectionRef';

const SectionContainer = props => {
  const sectionRef = useSectionRef();

  return (
    <div
      className={`lg:h-screen box-border lg:snap-start ${props.className || ''}`}
      ref={sectionRef(props.section)}
    >
      <div className='pt-mobile-navbar-height lg:pt-navbar-height h-full w-full'>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
