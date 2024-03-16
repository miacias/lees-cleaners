import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={styles.h1}>LEE&apos;S cleaners</h1>
      <h2 className={styles.h2}>West Chester&apos;s favorite tailor since 1995.</h2>
    </header>
  );
}

export { Header };