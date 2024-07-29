interface CurrentGame {
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
  score: { r: number; w: number; o: number; inning: string }[];
  series_id?: string;
  status?: string;
  teamInfo: { name?: string; shortname?: string; img?: string }[];
  teams?: string[];
  venue?: string;
}
