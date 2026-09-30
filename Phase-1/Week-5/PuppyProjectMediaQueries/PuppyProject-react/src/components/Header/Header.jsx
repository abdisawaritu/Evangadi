import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.blueBackground}>
      <div className={styles.puppyLovers}>
        <h1>Puppy Lovers Page</h1>
      </div>
    </header>
  );
}

export default Header;
