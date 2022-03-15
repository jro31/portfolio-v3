import useSectionRef from '../../hooks/useSectionRef';

const SectionContainer = props => {
  const sectionRef = useSectionRef();

  return (
    <div
      className={`min-h-screen lg:h-screen box-border lg:snap-start pb-12 lg:pb-6 ${
        props.className || ''
      }`}
      ref={sectionRef(props.section)}
    >
      <div className='pt-mobile-navbar-height lg:pt-navbar-height min-h-screen h-full w-full'>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
