import {Notification} from '../Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

import { GiCoffeeCup } from "react-icons/gi";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total === 0 ? (
    <>
    <GiCoffeeCup size={50} color="brown" />
    
      <Notification message="There is no feedback" />
    </>
  ) : (
    <>
      <ul className={css['statistics-list']}>
        <li className={css['statistics-item']}>
          <p className={css['statistics-text']}>
            Good: <span>{good}</span>
          </p>
        </li>
        <li className={css['statistics-item']}>
          <p className={css['statistics-text']}>
            Neutral: <span>{neutral}</span>
          </p>
        </li>
        <li className={css['statistics-item']}>
          <p className={css['statistics-text']}>
            Bad: <span>{bad}</span>
          </p>
        </li>
        <li className={css['statistics-item']}>
          <p className={css['statistics-text']}>
            Total: <span>{total}</span>
          </p>
        </li>
      </ul>
      <p className={css['statistics-positive']}>
        Positive feedback: <span>{positivePercentage}%</span>
      </p>
    </>
  );
};



Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
