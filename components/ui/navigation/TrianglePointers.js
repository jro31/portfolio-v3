const TrianglePointers = props => {
  return (
    <div className='flex gap-2'>
      <div
        onClick={props.onClickLeft}
        className='h-0 w-0 border-y-10 border-y-transparent border-r-10 border-r-slate-600 hover:border-r-white'
      />
      <div
        onClick={props.onClickRight}
        className='h-0 w-0 border-y-10 border-y-transparent border-l-10 border-l-slate-600 hover:border-l-white'
      />
    </div>
  );
};

export default TrianglePointers;
