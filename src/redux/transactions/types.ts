export interface ITransactionsController {
  [userEmail: string]: ITransaction[];
}

export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  TRANSFER = "TRANSFER",
}

export interface ITransaction {
  type: TransactionType;
  from?: string;
  to: string;
  fromLabel?: string;
  toLabel?: string;
  amount: number;
  createdAt: string;
}
