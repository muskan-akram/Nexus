import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export function Wallet() {
  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Deposit', amount: 1000, status: 'Completed' },
    { id: 2, type: 'Transfer', amount: 500, status: 'Pending' },
  ]);

  const handleTransaction = (type: 'Deposit' | 'Withdraw' | 'Transfer') => {
    const amount = parseFloat(prompt(`Enter amount for ${type}:`) || '0');
    if (amount <= 0) return;

    let newBalance = balance;
    if (type === 'Deposit') newBalance += amount;
    else if (type === 'Withdraw' || type === 'Transfer') {
      if (amount > balance) {
        alert('Insufficient balance!');
        return;
      }
      newBalance -= amount;
    }

    setBalance(newBalance);

    const newTransaction = {
      id: transactions.length + 1,
      type,
      amount,
      status: 'Completed',
    };

    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
          <p className="text-gray-600">Manage your funds and transactions</p>
        </div>
      </div>

      {/* Balance Card */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Current Balance</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <h2 className="text-3xl font-bold">${balance.toLocaleString()}</h2>
          <div className="space-x-3">
            <Button onClick={() => handleTransaction('Deposit')}>Deposit</Button>
            <Button variant="outline" onClick={() => handleTransaction('Withdraw')}>Withdraw</Button>
            <Button variant="outline" onClick={() => handleTransaction('Transfer')}>Transfer</Button>
          </div>
        </CardBody>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">Transaction History</h2>
        </CardHeader>
        <CardBody>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 border-b">Type</th>
                <th className="px-4 py-2 border-b">Amount</th>
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{tx.type}</td>
                  <td className="px-4 py-2 border-b">${tx.amount.toLocaleString()}</td>
                  <td className="px-4 py-2 border-b">
                    <Badge
                      variant={tx.status === 'Completed' ? 'success' : 'warning'}
                    >
                      {tx.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
