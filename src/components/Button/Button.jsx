import PropTypes from 'prop-types';
import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({color}) => {
  // default red if no color provided
  const buttonStyle = {
    background: `radial-gradient(100% 10% at 50% 50%, #555 10%, transparent 10.5%),
      radial-gradient(10% 100% at 50% 50%, #444 10%, transparent 10.5%),
      radial-gradient(circle at 50% 37.5%, var(--text-color) 10%, transparent 10.5%),
      radial-gradient(circle at 50% 62.5%, var(--text-color) 10%, transparent 10.5%),
      radial-gradient(circle at 37.5% 50%, var(--text-color) 10%, transparent 10.5%),
      radial-gradient(circle at 62.5% 50%, var(--text-color) 10%, transparent 10.5%),
      radial-gradient(circle at 50% 50%, rgba(0,0,0,.25) 10%, transparent 12%),
      radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,.25) 57%, transparent 60%, rgba(0,0,0,.75) 90%),
      var(${color || '--lee-red'})`
  };

  return (
    <div className={styles.button} style={buttonStyle}></div>
  ); 
}

Button.propTypes = {
  color: PropTypes.string,
};

export default Button;
