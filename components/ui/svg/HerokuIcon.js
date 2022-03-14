const HerokuIcon = props => {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <title>Heroku</title>
      <path
        fill={props.color || 'black'}
        d='M19.17,2H4.83A1.79,1.79,0,0,0,3,3.8V20.2A1.79,1.79,0,0,0,4.83,22H19.17A1.8,1.8,0,0,0,21,20.2V3.8A1.8,1.8,0,0,0,19.17,2ZM20,20.2a.8.8,0,0,1-.81.8H4.83a.79.79,0,0,1-.8-.8V3.8a.79.79,0,0,1,.8-.8H19.17a.8.8,0,0,1,.81.8Z'
      />
      <polygon fill={props.color || 'black'} points='7.53 19 9.78 17 7.53 15 7.53 19' />
      <path
        fill={props.color || 'black'}
        d='M13.22,10a12,12,0,0,0-3.75.7V5h-2v8.65L8.88,13A12.3,12.3,0,0,1,13.17,12c1,0,1.25.55,1.25,1.05v6h2V13a2.68,2.68,0,0,0-.8-2.1A3.27,3.27,0,0,0,13.22,10Z'
      />
      <path
        fill={props.color || 'black'}
        d='M13,8.25h2A5.89,5.89,0,0,0,16.47,5h-2A7.17,7.17,0,0,1,13,8.25Z'
      />
    </svg>
  );
};

export default HerokuIcon;
