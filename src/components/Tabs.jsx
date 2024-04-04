export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  return (
    <>
      {/* buttons contains all TabButtons (one for each topic) */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
