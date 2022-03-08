const SectionContainer = props => {
  return (
    <div className={`lg:h-screen box-border lg:snap-start ${props.className || ''}`}>
      <div className='pt-mobile-navbar-height lg:pt-navbar-height h-full w-full'>
        {props.children}
      </div>
    </div>
  );
};

export default SectionContainer;
