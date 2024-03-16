import styles from './HoursAndServices.module.css'

const HoursAndServices = () => {
  return (
    <>
    <aside className={styles.aside}>
      <div className={`hours ${styles.hours}`}>Hours
        <ul title="Hours">
          <li>Mon-Fri 8:30am-6:30pm</li>
          <li>Saturday 9:30am-4:30pm</li>
          <li>Sunday Closed</li>
        </ul>
      </div>
      <div className={`services ${styles.services}`}>Services
        <ul title="Services">
          <li>Expert Tailoring</li>
          <li>Alterations</li>
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
    </aside>
    </>
  );
}

export { HoursAndServices };
