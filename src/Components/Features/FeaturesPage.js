import Feature from "./Feature";
import Data from "./data";


const Features = ({ features }) => {
  return (
    <ul className="feature-grid">
      {features.map((feature) => {
        return (
          <Feature
            key={feature.id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            link={feature.link}
            alt={feature.alt}
          />
        );
      })}
    </ul>
  );
};

export default Features;
