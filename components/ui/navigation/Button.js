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
    // TODO - Add transition to hover background color change
    <button
      onClick={props.onClick || null}
      disabled={props.disabled || false}
      className={`px-6 xs:px-10 lg:px-6 xl:px-10 py-2 lg:py-3 rounded-xl bg-gradient-to-br font-medium tracking-wide text-center w-full uppercase text-white disabled:text-slate-300 disabled:from-slate-500 disabled:to-slate-700 ${colorClasses()} ${
        props.className || ''
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
