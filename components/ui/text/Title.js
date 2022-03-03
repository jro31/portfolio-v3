const Title = props => {
  return (
    <h1
      className={`text-6xl font-sans font-semibold tracking-wide pb-1.5 ${props.className || ''}`}
    >
      {props.children}
    </h1>
  );
};

export default Title;
