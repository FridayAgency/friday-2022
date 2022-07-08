import styles from './Arrows.module.scss';

/**
 * Arrows for the slider components
 *
 *@author Brian Whelan
 *
 * @param {function} handleClick The function to run when clicked.
 * @param {boolean} red True if you want red arrows.
 * @param {boolean} black True if you want black arrows.
 *
 * @returns A slider arrow Right or Left.
 */

interface ArrowProps {
  handleClick: () => void;
  red?: boolean;
  black?: boolean;
}

export const RightArrow: React.FC<ArrowProps> = ({
  handleClick,
  red = false,
  black = false,
}) => {
  return (
    <div onClick={handleClick} className={` ${styles['animated-arrow']}`}>
      <span
        className={`${styles['arrow']}  ${styles.right} ${
          red && styles['arrow-red']
        }  ${black && styles['arrow-black']}`}
      >
        <span className={styles.shaft}></span>
      </span>
    </div>
  );
};

export const LeftArrow: React.FC<ArrowProps> = ({
  handleClick,
  red = false,
  black = false,
}) => {
  return (
    <div
      onClick={handleClick}
      className={`${styles['nav-next']} ${styles['animated-arrow']}`}
    >
      <span
        className={`${styles['arrow']} ${styles.left} ${
          red && styles['arrow-red']
        }  ${black && styles['arrow-black']}`}
      >
        <span className={styles.shaft}></span>
      </span>
    </div>
  );
};
