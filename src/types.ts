export interface Mitzvah {
  id: string;
  type: 'positive' | 'negative' | 'custom';
  title: string;
  description?: string;
  timing?: string;
  genderObligation: 'Both' | 'Men primarily' | 'Women primarily' | 'Men primarily (women often participate today)' | 'Customary for all';
  category: 'yomtov' | 'chol_hamoed' | 'fast' | 'minor_holiday' | 'memorial' | 'notable_event';
}

export interface DailyMitzvot {
  holiday: string;
  dayType: 'Yom Tov' | 'Chol HaMoed' | 'Fast Day' | 'Minor Holiday' | 'Modern Memorial Day';
  positives: Mitzvah[];
  negatives: Mitzvah[];
  customs?: Mitzvah[];
  notableEvents: string[];
}
