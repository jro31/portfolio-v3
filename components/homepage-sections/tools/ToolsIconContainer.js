const ToolsIconContainer = props => {
  return (
    <div className='flex flex-col gap-3 text-slate-600 hover:text-white h-40'>
      <div className='h-20 w-20'>{props.children}</div>
      <div className='text-center'>{props.name}</div>
    </div>
  );
};

export default ToolsIconContainer;
