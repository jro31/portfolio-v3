const FadeCircle = () => {
  return (
    <div className='absolute h-full w-full flex flex-col z-10'>
      <div className='basis-1/3 grow-0 shrink-0 flex'>
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-tl from-transparent via-black to-black' />
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-t from-transparent to-black' />
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-tr from-transparent via-black to-black' />
      </div>
      <div className='basis-1/3 grow-0 shrink-0 flex'>
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-l from-transparent to-black' />
        <div className='basis-1/3 grow-0 shrink-0 bg-transparent' />
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-r from-transparent to-black' />
      </div>
      <div className='basis-1/3 grow-0 shrink-0 flex'>
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-bl from-transparent via-black to-black' />
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-b from-transparent to-black' />
        <div className='basis-1/3 grow-0 shrink-0 z-20 bg-gradient-to-br from-transparent via-black to-black' />
      </div>
    </div>
  );
};

export default FadeCircle;
