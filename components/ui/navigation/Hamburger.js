const Hamburger = props => {
  const navIsOpenClasses = line => {
    if (!props.isOpen) return '';

    switch (line) {
      case 1: {
        return 'rotate-45';
      }
      case 2: {
        return 'hidden';
      }
      case 3: {
        return '-rotate-45 -translate-y-0.5';
      }
    }
  };

  const borderColorClass = () => {
    switch (props.background) {
      case 'dark':
        return 'border-white';
      case 'light':
        return 'border-black';
      default:
        return '';
    }
  };

  return (
    <div
      className={`flex flex-col justify-center transition-all duration-700 ${
        props.isOpen ? 'gap-0' : 'gap-2'
      } ${props.className || ''}`}
      onClick={props.onClick || null}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={`hamburgerLine${i + 1}`}
          className={`border ${borderColorClass()} w-8 transition-all ${navIsOpenClasses(i + 1)}`}
        />
      ))}
    </div>
  );
};

export default Hamburger;
