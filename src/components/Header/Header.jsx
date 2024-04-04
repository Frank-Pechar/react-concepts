import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Concepts</h1>
    </header>
  );
}
