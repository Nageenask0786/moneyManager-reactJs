import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails
  return (
    <li className="list-items">
      <p className="item">{title}</p>
      <p className="item">{amount}</p>
      <p className="item">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="image"
      />
    </li>
  )
}

export default TransactionItem
