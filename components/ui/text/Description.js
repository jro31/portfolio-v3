const Description = props => {
  return (
    <div
      className={`text-slate-600 text-lg lg:text-xl lg:leading-10 ${
        props.uppercase ? 'uppercase' : ''
      } ${props.className || ''}`}
    >
      {props.children}
    </div>
  );
};

export default Description;
