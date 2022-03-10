const Heading = props => {
  return <h2 className={`text-2xl font-bold ${props.className || ''}`}>{props.children}</h2>;
};

export default Heading;
