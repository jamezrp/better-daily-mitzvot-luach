import { HDate } from '@hebcal/core';
import { mitzvotMap, notableEventsMap } from './mitzvot-map';
import type { DailyMitzvot, Mitzvah } from './types';
export declare function getMitzvotForDate(gregorianDate: Date | HDate, il?: boolean): DailyMitzvot[];
export declare function getNotableEventsForDate(hdate: HDate): string[];
export { mitzvotMap, notableEventsMap };
export type { DailyMitzvot, Mitzvah };
