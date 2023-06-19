
import findOne from '../Models/User1.js';
import sendNotification from '../services/notificationService.js';

async function addTransaction(req, res) {
  try {
    const { name, email, transactionType, transactionAmount } = req.body;

    const user1 = await findOne({ email });
    if (!user1) {
      throw new Error('User1 not found');
    }

    // Validate the transaction type
    if (
      transactionType !== 'deposit' &&
      transactionType !== 'loan' &&
      transactionType !== 'withdrawal' &&
      transactionType !== 'transfer'
    ) {
      throw new Error('Invalid transaction type');
    }

    const runningTransactionAmount = user1.transactions.reduce((total, transaction) => {
      if (transaction.type === 'deposit' || transaction.type === 'loan') {
        return total + transaction.amount;
      } else if (transaction.type === 'withdrawal' || transaction.type === 'transfer') {
        return total - transaction.amount;
      }
      return total;
    }, 0);

     const parsedTransactionAmount = parseFloat(transactionAmount);
    if (isNaN(parsedTransactionAmount)) {
      throw new Error('Invalid transaction amount');
    }

    user1.transactions.push({
      name: name,
      type: transactionType,
      amount: parsedTransactionAmount,
    });

    await user1.save();

    sendNotification(email, name, transactionType, parsedTransactionAmount);
    console.log('Transaction added and notification sent.');

    console.log('Running Transaction Amount:', runningTransactionAmount);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.sendStatus(500);
  }
}

export default addTransaction;
