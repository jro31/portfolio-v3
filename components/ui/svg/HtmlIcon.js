const HtmlIcon = props => {
  return (
    <svg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
      <title>HTML</title>
      <path
        fill={props.color || 'black'}
        d='M71.197,46l33.604,377.479L255.474,466l151.725-42.521L440.803,46H71.197z M367.82,169.11H190.905l3.929,47.519h169.058  l-13.137,142.792l-94.236,25.99v0.268h-1.045l-95.029-26.258l-5.775-72.975h45.939l3.41,36.754l51.455,13.914l51.707-13.914  l5.782-59.846H152.312l-12.335-140.176h232.047L367.82,169.11z'
      />
    </svg>
  );
};

export default HtmlIcon;
