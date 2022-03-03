const SectionContainer = props => {
  return (
    <div className={`h-screen box-border snap-start ${props.className || ''}`}>
      <div className='pt-navbar-height h-full w-full'>{props.children}</div>
    </div>
  );
};

export default SectionContainer;
