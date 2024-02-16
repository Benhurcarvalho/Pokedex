import Image from "next/image";
import styles from '../styles/About.module.css';
import charizard from '../../public/images/charizard.png';

export default function About() {
  return (
    <div className={styles.about} >
      <h1>Sobre o Projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      <Image src={charizard} width={300} height={300} alt="Charizard" />
    </div>
  );
}
