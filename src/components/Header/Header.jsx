import styles from './Header.module.css'
import iron from '/iron-128px.png'
// import plug from '/power-cable-128px.png'
// import plug from '/power-cable-64px.png'
import plug from '/power-cable-64px-mid-green.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <img src={iron} alt='green iron'/>
        LEE&apos;S cleaners
        <img src={plug} alt='green electrical plug'/>
      </h1>
      <h2 className={styles.h2}>West Chester&apos;s favorite tailor since 1995.</h2>
    </header>
  );
}

export { Header };