import useElementRef from '../../hooks/useElementRef';

const SectionContainer = props => {
  const elementRef = useElementRef();

  return (
    <div
      className={`min-h-screen h-tall-screen-or-content box-border lg:snap-start pb-12 lg:pb-6 ${
        props.className || ''
      }`}
      ref={elementRef(props.section)}
    >
      <div className='pt-mobile-navbar-height lg:pt-navbar-height min-h-screen-minus-mobile-nav lg:min-h-screen-minus-nav h-full w-full'>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
