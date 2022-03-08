const Title = props => {
  return (
    <h1
      className={`text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans font-semibold tracking-wide pb-1.5 ${
        props.className || ''
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Title;
