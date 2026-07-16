const fs = require('fs');
const { HebrewCalendar, HDate } = require('@hebcal/core');
const { mitzvotMap } = require('./dist/index.js');

// Your daily mitzvot — add any of the 40-50 general ones here anytime
const dailyMitzvot = [
  {id:"shacharit", type:"positive", title:"Shacharit (morning prayer)", description:"", genderObligation:"Both", category:"daily"},
  {id:"mincha", type:"positive", title:"Mincha (afternoon prayer)", description:"", genderObligation:"Both", category:"daily"},
  {id:"maariv", type:"positive", title:"Maariv (evening prayer)", description:"", genderObligation:"Both", category:"daily"},
  {id:"shema_morning", type:"positive", title:"Recite Shema (morning)", description:"", genderObligation:"Both", category:"daily"},
  {id:"shema_night", type:"positive", title:"Recite Shema (night)", description:"", genderObligation:"Both", category:"daily"},
  {id:"tefillin", type:"positive", title:"Put on tefillin", description:"(Men primarily)", genderObligation:"Men primarily (women often participate today)", category:"daily"},
  {id:"tzitzit", type:"positive", title:"Wear tzitzit", description:"(Men primarily)", genderObligation:"Men primarily (women often participate today)", category:"daily"},
  {id:"tzedakah", type:"positive", title:"Give tzedakah", description:"", genderObligation:"Both", category:"daily"},
  {id:"blessings", type:"positive", title:"Morning blessings (Birchot Hashachar)", description:"", genderObligation:"Both", category:"daily"},
  {id:"torah_study", type:"positive", title:"Study Torah", description:"", genderObligation:"Both", category:"daily"},
  {id:"kriat_shema", type:"positive", title:"Kriat Shema before bed", description:"", genderObligation:"Both", category:"daily"}
];

function createICS() {
  let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Better Daily//Mitzvot Calendar//EN
CALSCALE:GREGORIAN
`;

  const start = new Date(2026, 0, 1);
  const end = new Date(2027, 11, 31);

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const date = new Date(d);
    const hdate = new HDate(date);

    // FIXED: safeguard — getHolidaysOnDate can return null
    const events = HebrewCalendar.getHolidaysOnDate(date, false) || [];

    let mitzvot = [];

    // Holiday-specific mitzvot
    for (const ev of events) {
      const key = ev.getDesc().replace(/ \(.*\)/, '');
      if (mitzvotMap[key]) {
        mitzvot = mitzvot.concat(
          mitzvotMap[key].positives || [],
          mitzvotMap[key].negatives || [],
          mitzvotMap[key].customs || []
        );
      }
    }

    // Daily mitzvot every single day
    mitzvot = mitzvot.concat(dailyMitzvot);

    // Special automatic cases
    if (hdate.getDay() === 6) mitzvot.push({id:"shabbat_rest", type:"positive", title:"Observe Shabbat rest (no melacha)", description:"", genderObligation:"Both", category:"yomtov"});
    if (hdate.getDate() === 1) mitzvot.push({id:"rosh_chodesh", type:"positive", title:"Rosh Chodesh Mussaf", description:"", genderObligation:"Both", category:"yomtov"});

    // Build description with clear day/night split
    let desc = `Hebrew Daytime: ${hdate.getDate()} ${hdate.getMonthName()} ${hdate.getFullYear()}\n\n`;
    desc += `**🌅 MORNING / AFTERNOON MITZVOT**\n`;
    mitzvot.forEach(m => desc += `- ${m.title} (${m.genderObligation})\n`);

    const nextHDate = new HDate(hdate.getFullYear(), hdate.getMonth(), hdate.getDate() + 1);
    desc += `\n**🌙 EVENING / NIGHT MITZVOT (after sunset — ${nextHDate.getDate()} ${nextHDate.getMonthName()} ${nextHDate.getFullYear()} begins)**\n`;
    desc += `- Maariv\n- Nighttime Shema\n- Kriat Shema before bed\n`;

    const uid = `mitzvot-${date.toISOString().slice(0,10)}@betterdaily.app`;

    ics += `BEGIN:VEVENT
UID:${uid}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z
DTSTART;VALUE=DATE:${date.toISOString().slice(0,10).replace(/-/g,'')}
SUMMARY:${hdate.getDate()} ${hdate.getMonthName()} ${hdate.getFullYear()} — ${events.map(e=>e.getDesc()).join(', ') || 'Regular Day'}
DESCRIPTION:${desc.replace(/\n/g, '\\n')}
END:VEVENT
`;
  }

  ics += `END:VCALENDAR`;
  fs.writeFileSync('jewish-mitzvot-calendar-2026-2027.ics', ics);
  console.log('✅ Generated: jewish-mitzvot-calendar-2026-2027.ics (ready to import!)');
}

createICS();
