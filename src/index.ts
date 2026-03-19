import { HebrewCalendar, HDate } from '@hebcal/core';
import { mitzvotMap, notableEventsMap } from './mitzvot-map';
import type { DailyMitzvot } from './types';

export function getMitzvotForDate(gregorianDate: Date | HDate, il = false): DailyMitzvot[] {
  const events = HebrewCalendar.getHolidaysOnDate(gregorianDate, il);
  const result: DailyMitzvot[] = [];
  for (const ev of events) {
    const key = ev.getDesc();
    if (mitzvotMap[key]) result.push(mitzvotMap[key]);
  }
  return result;
}

export function getNotableEventsForDate(hdate: HDate): string[] {
  const key = `${hdate.getDate()} ${hdate.getMonthName()}`;
  return notableEventsMap[key] || [];
}

export { mitzvotMap, notableEventsMap };
export type { DailyMitzvot, Mitzvah };
