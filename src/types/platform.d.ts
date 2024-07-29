interface PlatformTypes {
  totalPoolAmount: number;
  amount: number;
  Prizepool: {
    title: string;
    description: string;
    minimumAmount: number;
    maximumAmount: number;
    maximumUsers: number;
    status: boolean;
    platFormFees: number;
    isDistributed: boolean;
    matchDetails: {
      matchId: string;
      name: string;
      matchType: string;
      status: string;
      venue: string;
      date: string;
      dateTimeGMT: string;
      teams: string[];
      score: { r: string; w: string; o: string; inning: string }[];
      teamInfo: {
        name: string;
        shortname: string;
        img: string;
      }[];
      series_id: string;
      fantasyEnabled: boolean;
      hasSquad: boolean;
      matchStarted: boolean;
      matchEnded: boolean;
    };
    PrizepoolPrices: {
      id: string;
      amount: number;
      maximumUsers: number;
      winningPercentage: number;
    }[];
    winningPercentage: number;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  id: string;
  createdAt: string;
  updatedAt: string;
}
