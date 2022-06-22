const Feature = ({ title, description, image, link, alt }) => {
  return (
    <>
      <li className="Product-grid-item">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={alt}></img>
        <link>{link}</link>
      </li>
    </>
  );
};

export default Feature;
