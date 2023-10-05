import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    yourBalance: 0,
    Expenses: 0,
    Income: 0,
    title: '',
    amount: '',
    type: '',
    TransactionsList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  addTransactions = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      TransactionsList: [...prevState.TransactionsList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  getAmounts = () => {
    const {TransactionsList} = this.state
    let TransactionAmount
    TransactionsList.map(each => {
      if (each.type === 'Expenses') {
        TransactionAmount = this.setState(prevState => ({
          Expenses: prevState.Expenses + parseInt(each.amount),
        }))
      } else if (each.type === 'Income') {
        TransactionAmount = this.setState(prevState => ({
          Income: prevState.Income + parseInt(each.amount),
        }))
      }

      return TransactionAmount
    })
  }

  render() {
    const {
      yourBalance,
      Expenses,
      Income,
      title,
      amount,
      type,
      TransactionsList,
    } = this.state

    return (
      <div className="bg">
        <div className="money-manager">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your<span>Money Manager</span>
          </p>
        </div>
        <div className="c">
          <MoneyDetails
            balance={yourBalance}
            expenses={Expenses}
            income={Income}
          />
        </div>
        <div className="transaction-container">
          <div className="transactions-items">
            <h1 className="heading">Add Transaction</h1>
            <form className="inputelements" onSubmit={this.addTransactions}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="select">TYPE</label>
              <select
                id="select"
                className="select-container"
                value={type}
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(each => (
                  <option
                    key={each.optionId}
                    value={each.optionId}
                    className="options"
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" onClick={this.getAmounts}>
                Add
              </button>
            </form>
          </div>
          <div>
            <ul className="transactions-items2">
              <div className="list-items">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              <h1 className="head">History</h1>
              {TransactionsList.map(each => (
                <TransactionItem transactionDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
