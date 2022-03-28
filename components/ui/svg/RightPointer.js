const RightPointer = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        d='M6,21.2L17.9,11c0,0,0,0,0,0c0,0,0.1-0.1,0-0.2c0,0,0,0,0,0L6,0.5'
        fill='none'
        stroke={props.color || 'black'}
        strokeWidth='2'
        strokeLinecap='round'
        // transform='translate(1 1)'
      />
    </svg>
  );
};

export default RightPointer;
