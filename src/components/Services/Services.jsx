import styles from './Services.module.css'
import dottedPaper from './dotted-paper.png'

const Services = () => {
  return (
    <>
      {/* TAILORING */}
      <div className={styles.servicesContainer}>

        <section className={`${styles.serviceCard} ${styles.sewingService}`}>
          <img src={dottedPaper} alt="dotted sewing paper" className={styles.backgroundImage}/>
          <div className={styles.redButton}></div>
          <p className={styles.cardText}>
            Wow so much tailoring its amazing
          </p>
          <div className={styles.serviceName}>
            <span className={styles.markerHighlight}>Expert Tailoring</span>
            <span>by Lisa Lee</span>
          </div>
        </section>
        {/* ALTERATIONS */}
        <section className={`${styles.serviceCard} ${styles.sewingService}`}>
          <img src={dottedPaper} alt="dotted sewing paper" className={styles.backgroundImage}/>
          <div className={styles.greenButton}></div>
          <p className={styles.cardText}>
            Yay we love alterations
          </p>
          <div className={styles.serviceName}>
            <span className={styles.markerHighlight}>Alterations</span>
            <span>by Lisa Lee</span>
          </div>
        </section>
      </div>
      <div className={styles.servicesContainer}>
        {/* CLEANING */}
        <section className={`${styles.serviceCard} ${styles.cleaningService}`}>
          <img src={dottedPaper} alt="dotted sewing paper" className={styles.backgroundImage}/>
          <div className={styles.tealButton}></div>
          <div className={styles.services}>
            <ul title="Services">
              <li className={styles.markerHighlight}>Dry Cleaning</li>
              <li className={styles.markerHighlight}>Dress Shirt Laundry</li>
              <li className={styles.markerHighlight}>Household Items</li>
              <li className={styles.markerHighlight}>Wedding Gowns</li>
              <li className={styles.markerHighlight}>Draperies</li>
              <li className={styles.markerHighlight}>Leathers and Furs</li>
              <li className={styles.markerHighlight}>Comforters</li>
              <li className={styles.markerHighlight}>Sheets</li>
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