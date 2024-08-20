const Button = ({ onClick, children, style, className }) => {
  return (
    <button className={`btn ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
