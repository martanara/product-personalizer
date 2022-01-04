import shortid from 'shortid';
import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map(color => <li key={shortid()}><button type="button" onClick={() => setCurrentColor(color)} className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} /></li>)}
      </ul>
    </div>
  );
}

export default OptionColor;