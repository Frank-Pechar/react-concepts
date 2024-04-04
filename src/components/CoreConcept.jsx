export default function CoreConcept({ image, title, description }) {
  // format concept topic object into a li element for rendering
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
