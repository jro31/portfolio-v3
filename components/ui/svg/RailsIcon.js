const RailsIcon = props => {
  return (
    <svg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'>
      <title>Ruby on Rails</title>
      <g fill={props.color || 'black'}>
        <path d='m21 111c5-96 62.5-110.5 91-82l-1.5 3.5c-45.5-24.5-59.5 44.5-39.5 78.5z' />
        <path d='m99 29.5v3l5 .5v-2.5zm.5-14.5v3l5.5 3.5v-2.5zm-16.5 17 4.5-1.5 1.5 4.5-4 1.5zm-9-23h7l1.5 5h-6.5zm1 29.5 3.5 5.5-2.5 3.5-4-5.5zm-17-26.5l4 6-5.5 3.5-4.5-6zm9 42-1.5 5.5 5.5 4 1-5zm-30.5-26.5 6.5 5.5-4.5 6.5-6.5-5zm27.5 44.5v6l7.5 2.5-.5-5.5zm-43.5-18.5 8 3.5-2.5 7.5-8.5-3zm46.5 41 2 6.5 9 1-2-6zm-56-9.5 9 1.5-1 9.5-10-1z' />
      </g>
    </svg>
  );
};

export default RailsIcon;
