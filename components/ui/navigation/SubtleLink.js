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
    <div className='flex'>
      <div
        className={`flex gap-3 cursor-pointer text-slate-600 hover:text-white border-b ${
          props.underline ? 'border-slate-600' : 'border-transparent'
        } hover:border-white pb-3 transition-colors ${props.className || ''}`}
        onClick={props.onClick}
      >
        <div className={`uppercase ${textColorClass()}`}>{props.children}</div>
        {props.arrow && <div>&#10140;&#65038;</div>}
      </div>
    </div>
  );
};

export default SubtleLink;
