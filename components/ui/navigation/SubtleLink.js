const SubtleLink = props => {
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

  return (
    <div className={props.className || ''}>
      <div className='flex'>
        <div
          className={`flex gap-3 cursor-pointer transition-colors text-slate-600 hover:text-white border-b hover:border-white pb-3 ${
            props.underline ? 'border-slate-600' : 'border-transparent'
          }`}
          onClick={props.onClick}
        >
          <div className={`uppercase transition-colors ${textColorClass()}`}>{props.children}</div>
          {props.arrow && <div>&#10140;&#65038;</div>}
        </div>
      </div>
    </div>
  );
};

export default SubtleLink;
