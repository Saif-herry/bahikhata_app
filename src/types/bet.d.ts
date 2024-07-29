type Bet = {
  PrizepoolPrice: {
    amount: number;
    createdAt: string;
    id: string;
    maximumUsers: number;
    prizePoolId: string;
    updatedAt: string;
    winningPercentage: number;
  };
  User: User;
  createdAt: string;
  id: string;
  optTeam: string;
  prizePoolId: string;
  prizepoolPriceId: number;
  updatedAt: string;
  userId: string;
  didWin?: boolean;
};
