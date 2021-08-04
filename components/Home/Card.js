const Card = ({ title, img, className }) => {
  return (
    <div className={`card ${className}`}>
      <img src={img} alt={title} className="h-[2rem]" />
      <div className="text-sm">{title}</div>
    </div>
  );
};

export default Card;
