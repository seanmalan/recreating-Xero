const LiEl = ({ title, description, image, link, alt }) => {
  return (
    <>
      <li>
        <h1>{title}</h1>
        <p>{description}</p>
        <link href={link} />
        <img src={image} alt={alt} />
      </li>
    </>
  );
};

export default LiEl;
