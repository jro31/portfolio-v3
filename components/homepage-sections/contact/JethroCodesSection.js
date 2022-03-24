const JethroCodesSection = props => {
  return (
    <div className={`flex-col xl:basis-1/3 ${props.className || ''}`}>
      <div className='text-center'>
        <span className='lg:hidden'>
          ...or checkout my projects in more detail at jethro.codes!
        </span>
        <span className='hidden lg:block'>
          ...or checkout my projects in more detail at jethro.codes...
        </span>
      </div>
      {/* TODO - Add link */}
    </div>
  );
};

export default JethroCodesSection;
