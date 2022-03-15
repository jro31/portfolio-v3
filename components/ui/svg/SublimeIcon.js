const SublimeIcon = props => {
  return (
    <svg viewBox='75 75 350 350' xmlns='http://www.w3.org/2000/svg'>
      <title>Sublime Text</title>
      <path
        d='M129.6 161.5l233.8-74.2s16.6-8.7 12.6 7.4l.6 71.5s2.9 10.5-11.5 13.1l-95 29.7z'
        fill={props.color || 'black'}
      />
      <path
        d='M129.6 161.5s-9.2 2.2-6.5 17.9l-.5 68.9s-.8 8.7 15.7 12.2L370 335.1s7.8 3.1 6.9-6.5l.1-76.8s2.2-7.9-12.2-13.1L270.1 209z'
        fill={props.color || 'black'}
      />
      <path
        d='M231.7 290.5l-98.6 30.1s-11.9.4-10.5 22.7-.1 67.2-.1 67.2 1 8.3 12.4 3.5l233.8-74.6s8.3-2.1 1.3-4.4c-7-2.2-138.3-44.5-138.3-44.5z'
        fill={props.color || 'black'}
      />
    </svg>
  );
};

export default SublimeIcon;
