import React from 'react';
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <table className={css["transaction-history"]}>
      <thead className={css["head"]}>
        <tr className={css['head-table']}>
          <th className={css["title-table"]}>TYPE</th>
          <th className={css["title-table"]}>AMOUNT</th>
          <th className={css["title-table"]}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({id, type, amount, currency}) => {
          return (
            <tr key={id} className={css["arrow-table"]}>
              <td>{capitalizeFirstLetter(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
