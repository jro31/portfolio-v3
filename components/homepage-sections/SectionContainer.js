import useElementRef from '../../hooks/useElementRef';

const SectionContainer = props => {
  const elementRef = useElementRef();

  return (
    <div
      className={`section-outer-container box-border lg:snap-start pb-12 lg:pb-6 ${
        props.className || ''
      }`}
      ref={elementRef(props.section)}
    >
      <div className='section-inner-container flex flex-col h-full pt-mobile-navbar-height lg:pt-navbar-height'>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
