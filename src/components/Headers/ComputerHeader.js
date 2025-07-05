import styles from './ComputerHeader.module.css'

export default function Home() {
  return (
    <header className={styles.computerheader}>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}