import './tag.scss';

interface Props {
  text: string;
  className: string;
}
const Tag = ({ text, className }: Props) => (
  <span className={className}>{text}</span>
);

export default Tag;
