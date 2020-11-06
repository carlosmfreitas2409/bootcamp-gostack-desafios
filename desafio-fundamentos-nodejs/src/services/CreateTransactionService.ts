import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: CreateTransaction): Transaction {
    if (type !== 'income' && type !== 'outcome')
      throw Error('Invalid transaction type');

    const { total } = this.transactionsRepository.getBalance();
    if (type === 'outcome' && value > total)
      throw Error("You don't have enough balance to make this transaction");

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default CreateTransactionService;
