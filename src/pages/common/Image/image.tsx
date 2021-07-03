interface Props {
  src: string;
  className: string;
  alt: string;
}

const Image = ({ src, className, alt }: Props) => {
  return <img src={src} className={className} alt={alt} />;
};

export default Image;
