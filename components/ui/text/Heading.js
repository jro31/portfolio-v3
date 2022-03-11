const Heading = props => {
  return (
    <h2 className={`text-lg xs:text-xl lg:text-2xl font-bold ${props.className || ''}`}>
      {props.children}
    </h2>
  );
};

export default Heading;
