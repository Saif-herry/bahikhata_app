interface GamePlayHistory {
  month: string;
  gamePlayed: number;
}

interface PrizepoolPrice {
  amount: number;
  maximumUsers: number;
  winningPercentage: number;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface TransactionHistory {
  txnId: string;
  txnType: string;
  amount: number;
  status: string;

  Bet: {
    optTeam: string;
    isEnded: boolean;
    createdAt: string;
    updatedAt: string;
    winStatus: boolean;
    winningAmount: number;
    id: string;
  };
  User: UserDetail;
  id: string;
  createdAt: string;
  updatedAt: string;
}
interface GameHistory {
  PrizepoolPrice: PrizepoolPrice;
  Prizepool: Prizepool;
  User: UserDetail;
  createdAt: string;
  id: string;
  isEnded: boolean;
  optTeam: string;
  updatedAt: string;
  winStatus: boolean;
  winningAmount: number;
}

interface UserDetailsTypes {
  user: UserDetail;
  gamePlayHistory: GamePlayHistory[];
  gameHistory: GameHistory[];
  transactionHistory: TransactionHistory[];
}
