const SendGridIcon = props => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 21.25h21.374v21.374H0z' fill={props.color || 'black'} />
      <path d='M0 21.25h21.374v21.374H0z' fill={props.color || 'black'} enableBackground='new ' />
      <path d='M21.374 42.626h21.25v21.25h-21.25z' fill={props.color || 'black'} />
      <path
        d='M21.374 42.626h21.25v21.25h-21.25z'
        fill={props.color || 'black'}
        enableBackground='new '
      />
      <path d='M0 63.877h21.374V64H0zm0-21.25h21.374v21.25H0z' fill={props.color || 'black'} />
      <path
        d='M21.374 0h21.25v21.25h-21.25zm21.252 21.374H64v21.25H42.626z'
        fill={props.color || 'black'}
      />
      <path d='M21.374 42.626h21.25V21.25h-21.25z' fill={props.color || 'black'} />
      <g fill={props.color || 'black'}>
        <path d='M42.626 0H64v21.25H42.626z' />
        <path d='M42.626 21.25H64v.123H42.626z' />
      </g>
    </svg>
  );
};

export default SendGridIcon;
