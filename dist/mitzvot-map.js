"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notableEventsMap = exports.mitzvotMap = void 0;
exports.mitzvotMap = {
    "Rosh Hashana": {
        holiday: "Rosh Hashana", dayType: "Yom Tov",
        positives: [
            { id: "shofar", type: "positive", title: "Hear the shofar", description: "Hear (or blow) during services", timing: "during services", genderObligation: "Men primarily (women often participate today)", category: "yomtov" },
            { id: "rest", type: "positive", title: "Rest/observe Yom Tov", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "teshuva", type: "positive", title: "Repent/engage in teshuva", description: "Self-examination + vidui", genderObligation: "Both", category: "yomtov" }
        ],
        negatives: [{ id: "no_melacha", type: "negative", title: "No melacha", description: "", genderObligation: "Both", category: "yomtov" }],
        customs: [{ id: "tashlich", type: "custom", title: "Perform Tashlich", description: "Cast sins into water", timing: "afternoon or Ten Days", genderObligation: "Customary for all", category: "yomtov" }],
        notableEvents: []
    },
    "Yom Kippur": {
        holiday: "Yom Kippur", dayType: "Yom Tov",
        positives: [
            { id: "fast", type: "positive", title: "Fast", description: "Afflict your soul", genderObligation: "Both", category: "yomtov" },
            { id: "rest", type: "positive", title: "Rest/observe the day", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "teshuva", type: "positive", title: "Repent with vidui", description: "", genderObligation: "Both", category: "yomtov" }
        ],
        negatives: [
            { id: "no_melacha", type: "negative", title: "No melacha (Shabbat-level)", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "five_afflictions", type: "negative", title: "Five Afflictions", description: "No eat/drink, no bathe, no anoint, no leather shoes, no relations", genderObligation: "Both", category: "yomtov" }
        ],
        customs: [{ id: "kaparot", type: "custom", title: "Perform Kaparot", description: "Symbolic atonement on erev", timing: "erev Yom Kippur", genderObligation: "Customary for all", category: "yomtov" }],
        notableEvents: []
    },
    "Pesach": {
        holiday: "Pesach", dayType: "Yom Tov",
        positives: [
            { id: "biur_chametz", type: "positive", title: "Remove/burn chametz", description: "Bi'ur + bedika search", timing: "14 Nissan eve", genderObligation: "Both", category: "yomtov" },
            { id: "eat_matzah", type: "positive", title: "Eat matzah on first night", description: "During Seder", genderObligation: "Both", category: "yomtov" },
            { id: "seder_story", type: "positive", title: "Tell the Exodus story", description: "At the Seder", genderObligation: "Both", category: "yomtov" },
            { id: "rest_first", type: "positive", title: "Rest/observe first day", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "rest_seventh", type: "positive", title: "Rest/observe seventh day", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "omer", type: "positive", title: "Count the Omer", description: "Starting day 2", genderObligation: "Men primarily (women often participate today)", category: "yomtov" },
            { id: "rejoice", type: "positive", title: "Rejoice on the festival", description: "", genderObligation: "Both", category: "yomtov" }
        ],
        negatives: [
            { id: "no_melacha_first_seventh", type: "negative", title: "No melacha on first & seventh days", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "no_chametz", type: "negative", title: "No chametz anywhere", description: "Do not eat, possess or see chametz all 7 days", genderObligation: "Both", category: "yomtov" }
        ],
        notableEvents: []
    },
    "Chol HaMoed Pesach": {
        holiday: "Chol HaMoed Pesach", dayType: "Chol HaMoed",
        positives: [],
        negatives: [{ id: "partial_melacha", type: "negative", title: "Chol HaMoed restrictions", description: "Only necessary work allowed", genderObligation: "Both", category: "chol_hamoed" }],
        notableEvents: []
    },
    "Shavuot": {
        holiday: "Shavuot", dayType: "Yom Tov",
        positives: [
            { id: "rest", type: "positive", title: "Rest/observe Yom Tov", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "rejoice", type: "positive", title: "Rejoice on the festival", description: "", genderObligation: "Both", category: "yomtov" }
        ],
        negatives: [{ id: "no_melacha", type: "negative", title: "No melacha", description: "", genderObligation: "Both", category: "yomtov" }],
        notableEvents: []
    },
    "Sukkot": {
        holiday: "Sukkot", dayType: "Yom Tov",
        positives: [
            { id: "sukkah", type: "positive", title: "Dwell in the sukkah", description: "For the seven days", genderObligation: "Men primarily (women often participate today)", category: "yomtov" },
            { id: "four_species", type: "positive", title: "Take up and wave four species", description: "Lulav + etrog etc.", genderObligation: "Men primarily (women often participate today)", category: "yomtov" },
            { id: "rest_first", type: "positive", title: "Rest/observe first day", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "rejoice", type: "positive", title: "Rejoice on the festival (heightened)", description: "", genderObligation: "Both", category: "yomtov" }
        ],
        negatives: [
            { id: "no_melacha_first", type: "negative", title: "No melacha on first day", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "no_melacha_eighth", type: "negative", title: "No melacha on eighth day (Shemini Atzeret)", description: "", genderObligation: "Both", category: "yomtov" }
        ],
        notableEvents: []
    },
    "Chol HaMoed Sukkot": {
        holiday: "Chol HaMoed Sukkot", dayType: "Chol HaMoed",
        positives: [],
        negatives: [{ id: "partial_melacha", type: "negative", title: "Chol HaMoed restrictions", description: "Only necessary work allowed", genderObligation: "Both", category: "chol_hamoed" }],
        notableEvents: []
    },
    "Shemini Atzeret": {
        holiday: "Shemini Atzeret", dayType: "Yom Tov",
        positives: [
            { id: "rest", type: "positive", title: "Rest/observe as separate Yom Tov", description: "", genderObligation: "Both", category: "yomtov" },
            { id: "rejoice", type: "positive", title: "Rejoice (hakafot)", description: "", genderObligation: "Both", category: "yomtov" }
        ],
        negatives: [{ id: "no_melacha", type: "negative", title: "No melacha", description: "", genderObligation: "Both", category: "yomtov" }],
        notableEvents: []
    },
    "Chanukah": {
        holiday: "Chanukah", dayType: "Minor Holiday",
        positives: [{ id: "light_menorah", type: "positive", title: "Light the Chanukah menorah", description: "Add one light each night with blessings", genderObligation: "Both", category: "minor_holiday" }],
        negatives: [],
        notableEvents: []
    },
    "Purim": {
        holiday: "Purim", dayType: "Minor Holiday",
        positives: [
            { id: "megillah", type: "positive", title: "Read/hear the Megillah", description: "Night and day", genderObligation: "Both", category: "minor_holiday" },
            { id: "seudah", type: "positive", title: "Festive Purim meal", description: "", genderObligation: "Both", category: "minor_holiday" },
            { id: "mishloach_manot", type: "positive", title: "Send mishloach manot", description: "", genderObligation: "Both", category: "minor_holiday" },
            { id: "matanot_laevyonim", type: "positive", title: "Give matanot la'evyonim", description: "", genderObligation: "Both", category: "minor_holiday" }
        ],
        negatives: [],
        notableEvents: []
    },
    "Tzom Gedaliah": { holiday: "Tzom Gedaliah", dayType: "Fast Day", positives: [{ id: "fast", type: "positive", title: "Fast", description: "Dawn to nightfall", genderObligation: "Both", category: "fast" }], negatives: [{ id: "no_eat_drink", type: "negative", title: "No eating or drinking", genderObligation: "Both", category: "fast" }], notableEvents: [] },
    "Asara B'Tevet": { holiday: "Asara B'Tevet", dayType: "Fast Day", positives: [{ id: "fast", type: "positive", title: "Fast", genderObligation: "Both", category: "fast" }], negatives: [{ id: "no_eat_drink", type: "negative", title: "No eating or drinking", genderObligation: "Both", category: "fast" }], notableEvents: [] },
    "Ta'anit Esther": { holiday: "Ta'anit Esther", dayType: "Fast Day", positives: [{ id: "fast", type: "positive", title: "Fast", genderObligation: "Both", category: "fast" }], negatives: [{ id: "no_eat_drink", type: "negative", title: "No eating or drinking", genderObligation: "Both", category: "fast" }], notableEvents: [] },
    "Seventeenth of Tammuz": { holiday: "Seventeenth of Tammuz", dayType: "Fast Day", positives: [{ id: "fast", type: "positive", title: "Fast", genderObligation: "Both", category: "fast" }], negatives: [{ id: "no_eat_drink", type: "negative", title: "No eating or drinking", genderObligation: "Both", category: "fast" }], notableEvents: [] },
    "Tisha B'Av": {
        holiday: "Tisha B'Av", dayType: "Fast Day",
        positives: [
            { id: "fast", type: "positive", title: "Fast", description: "~25 hours", genderObligation: "Both", category: "fast" },
            { id: "eicha", type: "positive", title: "Recite Megillat Eicha and Kinot", description: "", genderObligation: "Both", category: "fast" }
        ],
        negatives: [
            { id: "no_eat_drink", type: "negative", title: "No eating or drinking (~25 hours)", genderObligation: "Both", category: "fast" },
            { id: "five_afflictions", type: "negative", title: "Five Afflictions (full)", description: "", genderObligation: "Both", category: "fast" }
        ],
        notableEvents: []
    },
    "Tu B'Shevat": {
        holiday: "Tu B'Shevat", dayType: "Minor Holiday",
        positives: [{ id: "eat_fruits", type: "positive", title: "Eat fruits of Israel", description: "Especially the seven species", genderObligation: "Both", category: "minor_holiday" }],
        negatives: [],
        customs: [{ id: "plant_trees", type: "custom", title: "Support tree planting", description: "", genderObligation: "Customary for all", category: "minor_holiday" }],
        notableEvents: []
    },
    "Lag BaOmer": {
        holiday: "Lag BaOmer", dayType: "Minor Holiday",
        positives: [{ id: "rejoice", type: "positive", title: "Rejoice and celebrate", description: "Bonfires, picnics", genderObligation: "Both", category: "minor_holiday" }],
        negatives: [],
        notableEvents: []
    },
    "Tu B'Av": {
        holiday: "Tu B'Av", dayType: "Minor Holiday",
        positives: [{ id: "rejoice", type: "positive", title: "Celebrate love and joy", description: "", genderObligation: "Both", category: "minor_holiday" }],
        negatives: [],
        notableEvents: []
    },
    "Yom HaShoah": {
        holiday: "Yom HaShoah", dayType: "Modern Memorial Day",
        positives: [{ id: "memorial", type: "positive", title: "Holocaust remembrance", description: "Silence at 10am, yahrtzeit candle", genderObligation: "Both", category: "memorial" }],
        negatives: [{ id: "no_entertainment", type: "negative", title: "Avoid celebrations", genderObligation: "Both", category: "memorial" }],
        notableEvents: []
    },
    "Yom HaZikaron": { holiday: "Yom HaZikaron", dayType: "Modern Memorial Day", positives: [{ id: "memorial", type: "positive", title: "Memorial for fallen soldiers", description: "Sirens", genderObligation: "Both", category: "memorial" }], negatives: [], notableEvents: [] },
    "Yom HaAtzma'ut": { holiday: "Yom HaAtzma'ut", dayType: "Modern Memorial Day", positives: [{ id: "celebrate", type: "positive", title: "Celebrate Independence", description: "Hallel in some communities", genderObligation: "Both", category: "memorial" }], negatives: [], notableEvents: [] },
    "Yom Yerushalayim": { holiday: "Yom Yerushalayim", dayType: "Modern Memorial Day", positives: [{ id: "celebrate", type: "positive", title: "Celebrate Jerusalem reunification", description: "", genderObligation: "Both", category: "memorial" }], negatives: [], notableEvents: [] }
};
exports.notableEventsMap = {
    "7 Adar": ["Birth and yahrtzeit of Moshe Rabbeinu — some recite special prayers or fast"],
    // TODO: Expand this to every Hebrew date later (community PRs welcome!)
};
