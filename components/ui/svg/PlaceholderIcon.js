const PlaceholderIcon = props => {
  return (
    <svg
      version='1.1'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <g>
        <path
          className={`fill-transparent stroke-[14] `}
          style={{
            stroke: props.color || 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
          d='M247.9,109c0.2,0,0.5,0,0.7,0'
        />
        <path
          className={`fill-transparent stroke-[14] `}
          style={{
            stroke: props.color || 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
          d='M276.9,108.6c39.6-0.4,79.3-0.8,120.1-0.8c22.1,0,40,12.2,46.6,32.1c1.7,5,2.5,10.6,2.5,15.9 c0.2,66.1,0.2,132.1,0.1,198.2c0,27.4-20.8,48-48.5,48c-45.2,0.1-84.3,2.1-129.5,2.1c-51.2,0-102.4,0-153.6,0 c-23.8,0-42.5-14.6-47.8-37.2c-0.3-1.4-0.8-2.9-1.1-4.3c0-3.6,0-7.2,0-10.9'
        />
        <path
          className={`fill-transparent stroke-[14] `}
          style={{
            stroke: props.color || 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
          d='M65.7,321.9c0-56.9,0-113.7,0-170.6c1.4-4.4,2.2-9,4.2-13.2c8-17.2,21.7-26.5,40.6-28.1c1.5-0.1,3-0.1,4.5-0.1 c35,0,69.3-0.3,103.3-0.6'
        />
        <path
          className={`fill-transparent stroke-[14] `}
          style={{
            stroke: props.color || 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
          d='M130.7,358.7c12.4-11.5,23.4-24.1,34.1-36.9'
        />
        <path
          className={`fill-transparent stroke-[14] `}
          style={{
            stroke: props.color || 'black',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
          d='M179,304.8c10.7-12.7,21.6-25.3,33.9-36.9c1.4-1.3,2.9-2.7,4.4-4c8.3,7.4,24.8,20.5,32.8,27.7 c6.5,5.9,14.4,8,18.2,0c5-10.3,19-54,25.1-74.6c1.2,1.1,2.2,2,3.2,3c27.9,36,68,103.7,89.8,137.4'
        />
        <circle style={{ fill: props.color || 'black' }} cx='370.9' cy='181.9' r='20' />
      </g>
    </svg>
  );
};

export default PlaceholderIcon;