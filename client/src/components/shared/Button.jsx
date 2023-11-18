const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
