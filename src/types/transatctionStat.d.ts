interface TransactionMonth {
  month: string;
  totalTransaction: number;
}

interface TransactionRecentTypes {
  Bet: {
    id: string;
    winStatus: null | string;
    winningAmount: null | number;
  };
  User: {
    avatar: null | string;
    dob: string;
    email: string;
    id: string;
    name: string;
    phoneNumber: null | string;
  };
  amount: number;
  betId: string;
  createdAt: string;
  status: string;
  txnId: string;
  txnType: string;
  updatedAt: string;
  userId: string;
}

interface AllTransaction {
  Bet: {
    id: string;
    isEnded: boolean;
    optTeam: string;
    Prizepool: PrizePool;
    PrizepoolPrice: {
      amount: number;
      createdAt: string;
      id: string;
      maximumUsers: number;
      winningPercentage: number;
    };
  };
  id: string;
  betId: string;
  txnId: string;
  txnType: string;
  amount: number;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  User: {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    isOnline: boolean;
    lastOnline: string;
    avatar: null | string;
    Wallet: { amount: number; finalAmount: number };
  };
}

// {
//   createdAt: string;
//   description: string;
//   id: string;
//   isDistributed: boolean;
//   lastReValidate: string;
//   matchDetails: {
//     date: string;
//     dateTimeGMT: string;
//     matchId: string;
//     matchType: string;
//     name: string;
//     series_id: string;
//     status: string;
//     teamInfo: {
//       img: string;
//       name: string;
//       shortname: string;
//     }[];
//     teams: string[];
//     venue: string;
//   };
//   maximumAmount: number;
//   maximumUsers: number;
//   minimumAmount: number;
//   platFormFees: number;
//   status: boolean;
//   title: string;
//   updatedAt: string;
// };
