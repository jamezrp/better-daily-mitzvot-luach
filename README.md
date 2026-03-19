# Better Daily Mitzvot Luach

Open-source dataset of **every positive, negative, and custom mitzvah** for all Jewish holidays, fast days, minor holidays, and Israeli memorial days — with accurate gender obligations and day-type separation.

Powered by [@hebcal/core](https://www.npmjs.com/package/@hebcal/core) so dates, zmanim, Israel/Diaspora differences, and leap years are always perfect.

### Quick Start
```ts
import { getMitzvotForDate } from 'better-daily-mitzvot-luach';

const today = getMitzvotForDate(new Date());
console.log(today);
