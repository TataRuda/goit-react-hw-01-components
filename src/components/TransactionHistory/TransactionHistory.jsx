import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ( {items}) => {
  return (
  <table className={css.table}>
  <thead className={css.tableHead}>
    <tr>
      <th className={css.tableItemHead}>Type</th>
      <th className={css.tableItemHead}>Amount</th>
      <th className={css.tableItemHead}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (<tr className={css.tableRow} key={item.id}>
      <td className={css.tableItem}>{item.type}</td>
      <td className={css.tableItem}>{item.amount}</td>
      <td className={css.tableItem}>{item.currency}</td>
    </tr>))}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
     PropTypes.shape({
     id: PropTypes.string,
     type: PropTypes.string,
     amount: PropTypes.string,
     currency: PropTypes.string,
       })
     ),
   }