export default function Section({ title, children, ...props }) {
  // Bottom section of page
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
