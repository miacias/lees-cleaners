import workspace from "/workspace-collab-media-upKXvfgKABY-unsplash.jpg"
import styles from './Workspace.module.css'

const Workspace = () => {
  return (
    <div className={`workspace ${styles.workspace}`}>
      <ul className={`info ${styles.info}`}>
        <li>All alterations done on site</li>
      </ul>
      <img src={workspace} alt="tailor workspace" style={{width: '400px'}}/>
    </div>
  );
}

export { Workspace };
