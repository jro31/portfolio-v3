const DesktopNavItem = props => {
  const textColorClass = () => {
    switch (props.background) {
      case 'dark':
        return 'text-white';
      case 'light':
        return 'text-black';
      default:
        return '';
    }
  };

  const underlineColorClass = () => {
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
      className={`flex cursor-pointer transition-colors border-b pb-3 uppercase ${textColorClass()} ${
        props.underline ? underlineColorClass() : 'border-transparent'
      }`}
      onClick={props.onClick || null}
    >
      {props.children}
    </div>
  );
};

export default DesktopNavItem;
