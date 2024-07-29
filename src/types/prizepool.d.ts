type PrizePool = {
  createdAt?: string;
  description?: string;
  Bets: Bet[];
  id: string;
  matchId?: string;
  matchDetails: MatchDetails;
  maximumAmount?: number;
  maximumUsers?: number;
  minimumAmount?: number;
  status: boolean;
  title?: string;
  totalFillUpSpots?: number;
  totalPrizePoolAmount?: number;
  totalPrizePoolBetsAmount?: number;
  totalPrizePoolWinningCount?: number;
  isDistributed?: boolean;
  platFormFees?: number;
  totalRemainingSpots?: number;
  updatedAt?: string;
  PrizepoolPrices?: PrizepoolPrices[];
};

type MatchDetails = {
  bbbEnabled?: boolean;
  date?: string;
  dateTimeGMT?: string;
  fantasyEnabled?: boolean;
  hasSquad?: boolean;
  id?: string;
  matchEnded?: boolean;
  matchStarted?: boolean;
  matchType?: string;
  name?: string;
  series_id?: string;
  status?: string;
  teamInfo: { name?: string; shortname?: string; img?: string }[];
  teams?: string[];
  venue?: string;
  score: {
    r: string;
    o: string;
    w: string;
  }[];
};

type PrizepoolPrices = {
  PricePoolBets?: Bet[];
  amount: number;
  createdAt: string;
  id: string;
  maximumUsers: number;
  prizePoolId: string;
  prizePoolPriceWinningAmount: number;
  totalFillUpSpots: number;
  totalPayablePricePoolPriceWinningAmount: number;
  totalPrizePoolPriceWinningAmount: number;
  totalRemainingSpots: number;
  totalWinningCount: number;
  updatedAt: string;
  winningPercentage: number;
};
