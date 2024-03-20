import styles from './Header.module.css'
import iron from '/iron-128px.png'
import plug from './plug (2).png';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <img src={iron} alt='green iron' className={styles.ironImg}/>
        LEE&apos;S Cleaners
        <img src={plug} alt='green electrical plug' className={styles.plugImg}/>
      </h1>
      <h2 className={styles.h2}>West Chester&apos;s favorite tailor since 1995.</h2>
      <div className={styles.bubbles}>
        <a
          className={styles.link}
          target='_blank'
          href="https://www.google.com/maps/search/?api=1&query=1409%20West%20Chester%20Pike%2C%20West%20Chester%2C%20PA%2C%2019382">
            1409 West Chester Pike, West Chester, PA 19382
        </a>
        <a
          className={styles.link}
          target='_blank'
          href="tel:610-429-0435">
            Tel. (610) 429-0435
        </a>
      </div>
    </header>
  );
}

export { Header };