const Description = props => {
  return (
    <div
      className={`text-lg lg:text-xl lg:leading-10 ${props.uppercase ? 'uppercase' : ''} ${
        props.className || ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Description;
