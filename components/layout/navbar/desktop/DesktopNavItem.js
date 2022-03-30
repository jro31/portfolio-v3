const DesktopNavItem = props => {
  const textColorClass = () => {
    switch (props.background) {
      case 'dark':
        return 'text-slate-200 hover:text-white';
      case 'light':
        return 'text-slate-800 hover:text-black';
      default:
        return '';
    }
  };

  const underlineColorClass = () => {
    switch (props.background) {
      case 'dark':
        return 'border-slate-200 hover:border-white';
      case 'light':
        return 'border-slate-800 hover:border-black';
      default:
        return '';
    }
  };

  return (
    <div
      className={`flex cursor-pointer transition-colors border-b pb-3 uppercase font-semibold tracking-wider ${textColorClass()} ${
        props.underline ? underlineColorClass() : 'border-transparent'
      }`}
      onClick={props.onClick || null}
    >
      {props.children}
    </div>
  );
};

export default DesktopNavItem;
