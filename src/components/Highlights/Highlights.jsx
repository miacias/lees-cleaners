import PropTypes from 'prop-types';
import styles from './Highlights.module.css';

// eslint-disable-next-line react/prop-types
const Highlight = ({ color, content }) => {
  const highlightStyle = {
    background: `url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=${color})`,
  }

  return (
    <span className={styles.highlight} style={highlightStyle}>
      {content.map((item, index) => {
        return (<span key={index}>{item}</span>)
      })}
    </span>
  );
}

Highlight.propTypes = {
  color: PropTypes.string,
  content: PropTypes.array,
};

export default Highlight;