const Portrait = () => {
  return (
    <div className='relative basis-1/2 h-inherit'>
      <div className='absolute h-full w-full bg-gradient-radial from-blue-500 via-blue-900 to-black animate-slow-fade-in-delayed' />
      <div className='absolute h-full w-full flex flex-col'>
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
      <img
        src='/images/self-portrait.png'
        alt='Portrait'
        className='h-inherit w-full object-contain animate-slow-fade-in relative z-10'
      />
    </div>
  );
};

export default Portrait;
