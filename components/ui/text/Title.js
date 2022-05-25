const Title = props => {
  return (
    <h1
      className={`text-3xl font-extrabold sm:text-5xl sm:leading-none sm:tracking-tight xl:text-6xl ${
        props.className || ''
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Title;
