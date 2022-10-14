"use strict";
// 半角数字の場合は、number型を返す
let text = "2213333333333333513535135";
if (parseInt(text)) {
    console.log(parseInt(text), "Yes");
}
else {
    console.log(parseInt(text), "No");
}
