const MultimediaIcon = props => {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={props.color || 'black'}
        d='M23,9h-3V5c0-0.6-0.4-1-1-1H1C0.4,4,0,4.4,0,5v13c0,0.6,0.4,1,1,1h8v2H6c-0.6,0-1,0.4-1,1v2h18c0.6,0,1-0.4,1-1V10  C24,9.4,23.6,9,23,9z M14,23H6v-1h8V23z M14,21h-3v-2h3V21z M14,17H2v-1h12V17z M14,10v5H2V6h16v3h-3C14.4,9,14,9.4,14,10z M22,22  h-6v-1h6V22z M22,20h-6v-7h6V20z M22,12h-6v-1h6V12z'
      />
    </svg>
  );
};

export default MultimediaIcon;
