const ToolsIconsSection = props => {
  return (
    <div className='flex flex-col justify-between text-slate-600 hover:text-white'>
      <div className=''>{props.name}</div>
      <div className='flex gap-5'>{props.children}</div>
    </div>
  );
};

export default ToolsIconsSection;
