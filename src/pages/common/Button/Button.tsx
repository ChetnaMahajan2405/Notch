import "./button.scss";

interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, className = "dark", ...props }: ButtonProps) => {
  return (
    <button type="button" className={className} {...props}>
      {label}
    </button>
  );
};

export default Button;
