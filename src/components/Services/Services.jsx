import styles from './Services.module.css'

const Services = () => {
  return (
    <>
      {/* TAILORING */}
      <div className={styles.servicesContainer}>
        <section className={`${styles.serviceCard} ${styles.sewingService}`}>
          <div className={styles.redButton}></div>
          <p className={styles.cardText}>
            Wow so much tailoring its amazing
          </p>
          <div className={styles.serviceName}>
            <span>Expert Tailoring</span>
            <span>by Lisa Lee</span>
          </div>
        </section>
        {/* ALTERATIONS */}
        <section className={`${styles.serviceCard} ${styles.sewingService}`}>
          <div className={styles.greenButton}></div>
          <p className={styles.cardText}>
            Yay we love alterations
          </p>
          <div className={styles.serviceName}>
            <span>Alterations</span>
            <span>by Lisa Lee</span>
          </div>
        </section>
      </div>
      <div className={styles.servicesContainer}>
        {/* CLEANING */}
        <section className={`${styles.serviceCard} ${styles.cleaningService}`}>
          <div className={styles.tealButton}></div>
          <div className={styles.services}>
            <ul title="Services">
              <li>Dry Cleaning</li>
              <li>Dress Shirt Laundry</li>
              <li>Household Items</li>
              <li>Wedding Gowns</li>
              <li>Draperies</li>
              <li>Leathers and Furs</li>
              <li>Comforters</li>
              <li>Sheets</li>
              <li>Tablecloths</li>
            </ul>
          </div>
          <div className={styles.serviceName}>
            <span></span>
            <span>by Lisa Lee</span>
          </div>
        </section>
      </div>
    </>
  );
}

export { Services };