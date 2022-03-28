const LeftPointer = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        d='M15.8,21.4L3.8,11.2c0,0,0,0,0,0c0,0-0.1-0.1,0-0.2c0,0,0,0,0,0L15.8,0.6'
        fill='none'
        stroke={props.color || 'black'}
        strokeWidth='2'
        strokeLinecap='round'
        // transform='translate(1 1)'
      />
    </svg>
  );
};

export default LeftPointer;
