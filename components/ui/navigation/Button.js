const Button = props => {
  return (
    <div
      onClick={props.onClick || null}
      className={`px-10 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-medium tracking-wide ${
        props.className || ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Button;
