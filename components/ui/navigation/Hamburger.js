const Hamburger = props => {
  const backgroundColorClass = () => {
    switch (props.background) {
      case 'dark':
        return 'bg-white';
      case 'light':
        return 'bg-black';
      default:
        return '';
    }
  };

  return (
    <div className='' onClick={props.onClick || null}>
      {[...Array(3)].map((_, i) => (
        <div
          key={`hamburger-line-${i + 1}`}
          className={`hamburger-transitions w-[33px] h-1 mb-[5px] relative rounded origin-[6px_0px] last:origin-bottom-left ${backgroundColorClass()} ${
            props.isOpen
              ? 'opacity-100 rotate-45 -translate-x-[2px] -translate-y-px even:opacity-0 even:rotate-0 even:scale-[0.2] last:-rotate-45 last:translate-x-0'
              : ''
          }`}
        />
      ))}
    </div>
  );
};

export default Hamburger;
