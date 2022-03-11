const CssIcon = props => {
  return (
    <svg viewBox='2 2 36 36' xmlns='http://www.w3.org/2000/svg'>
      <title>CSS</title>
      <g>
        <path
          fill={props.color || 'black'}
          stroke={props.color || 'black'}
          d='M32.34,6,30.1,31.2,20,34,9.9,31.2,7.66,6ZM13.22,22l.43,4.86L20,28.65h0l6.33-1.75,1.4-15.75H12.25l.28,3.09H24.34l-.28,3.17H12.81l.27,3.09H23.8l-.36,4L20,25.44h0l-3.45-.93L16.32,22Z'
        />
      </g>
    </svg>
  );
};

export default CssIcon;
