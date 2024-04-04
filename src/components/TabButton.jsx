export default function TabButton({ children, isSelected, ...props }) {
  // Individual li button for each topic
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
