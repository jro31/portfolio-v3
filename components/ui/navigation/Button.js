const Button = props => {
  const colorClasses = () => {
    switch (props.color) {
      case 'blue':
        return 'from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500';
      default:
        return 'from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500';
    }
  };

  return (
    <div
      onClick={props.onClick || null}
      className={`px-6 xs:px-10 lg:px-6 xl:px-10 py-2 lg:py-3 rounded-xl bg-gradient-to-br font-medium tracking-wide text-center w-full uppercase text-white ${colorClasses()} ${
        props.className || ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Button;
