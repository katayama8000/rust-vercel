"use strict";
const families = new Map();
families.set("father", "John");
families.set("mother", "Jane");
families.set("son", "Jack");
console.log(families.get("father"));
console.log(families.get("mother"));
console.log(families.get("son"));
console.log(families.has("father"));
console.log(families.has("mother"));
console.log(families.has("son"));
console.log(families.delete("father"));
console.log(families.delete("mother"));
console.log(families.delete("son"));
console.log(families.has("father"));
console.log(families.has("mother"));
console.log(families.has("son"));
console.log(families);
const browsersMap = new Map();
const companies = ["Google", "Mozilla", "Microsoft"];
const browsers = [
    { name: "Chrome", url: "https://chromeenterprise.google", version: 100 },
    {
        name: "Firefox",
        url: "https://www.mozilla.org/ja/firefox/new/",
        version: 110,
    },
    { name: "Edge", url: "https://www.microsoft.com/ja-jp/edge", version: 1.1 },
];
companies.map((com, i) => {
    browsersMap.set(com, {
        mantainedBy: browsers[i].name,
        url: browsers[i].url,
        version: browsers[i].version,
    });
});
console.log(browsersMap.get("Google"));
console.log(browsersMap);
