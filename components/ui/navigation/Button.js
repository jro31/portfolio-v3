const Button = props => {
  return (
    <div
      onClick={props.onClick || null}
      className={`px-6 xs:px-10 lg:px-6 xl:px-10 py-2 lg:py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-medium tracking-wide text-center xs:text-left w-full uppercase ${
        props.className || ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Button;
