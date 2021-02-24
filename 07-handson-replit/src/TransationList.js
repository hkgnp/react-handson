import React from 'react';

export default class TransationList extends React.Component {
  state = {
    transactions: [
      {
        id: 1201,
        name: 'TCZ 121Z',
        type: 'debit',
        amount: 1723,
      },
      {
        id: 1203,
        name: 'AARON WREN',
        type: 'credit',
        amount: 500,
      },
      {
        id: 1207,
        name: 'THOMSON FAMILY CLINIC',
        type: 'debit',
        amount: 60,
      },
      {
        id: 1211,
        name: 'F&J TRADING',
        type: 'debit',
        amount: 120.5,
      },
    ],
  };

  render() {
    return <React.Fragment>{this.renderTransactions()}</React.Fragment>;
  }

  renderTransactions = () => {
    let t = [];
    for (let transaction of this.state.transactions) {
      transaction.type === 'credit'
        ? t.push(
            <li style={{ color: 'green' }} key={transaction.id}>
              {transaction.name}, {transaction.amount}
            </li>
          )
        : t.push(
            <li style={{ color: 'red' }} key={transaction.id}>
              {transaction.name}, {transaction.amount}
            </li>
          );
    }
    return t;
  };
}
