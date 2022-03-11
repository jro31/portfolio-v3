const RubyIcon = props => {
  return (
    <svg fill='none' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
      <title>Ruby</title>
      <path d='M4.29301 4L8.05751 0.235504L9.73062 4H4.29301Z' fill={props.color || 'black'} />
      <path d='M14.293 0L10.6613 3.63175L9.04716 0H14.293Z' fill={props.color || 'black'} />
      <path
        d='M0.235501 8.05751L4.00012 9.73067V4.29289L0.235501 8.05751Z'
        fill={props.color || 'black'}
      />
      <path
        d='M3.63174 10.6613L0.000118256 9.04721V14.2929L3.63174 10.6613Z'
        fill={props.color || 'black'}
      />
      <path d='M5.00012 9.29289L9.29301 5H5.00012V9.29289Z' fill={props.color || 'black'} />
      <path
        d='M15.0001 13.731L11.093 4.61427L15.0001 0.707107V13.731Z'
        fill={props.color || 'black'}
      />
      <path
        d='M14.048 14.048L10.3314 5.37585L5.37584 10.3314L14.048 14.048Z'
        fill={props.color || 'black'}
      />
      <path d='M4.61427 11.093L13.7307 15H0.707225L4.61427 11.093Z' fill={props.color || 'black'} />
    </svg>
  );
};

export default RubyIcon;
