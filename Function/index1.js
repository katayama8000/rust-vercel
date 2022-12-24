"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const countList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 代入
let sum3 = 0;
for (let i = 0; i <= countList.length; i++) {
    sum3 = sum3 + i;
}
// 等価
let sum2 = countList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum3 === sum2);
function main1() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => {
            setTimeout(() => {
                console.log('hello');
                resolve('OK');
            }, 1000);
        });
        console.log('world');
    });
}
main1();
function main2() {
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('hello');
            resolve('OK');
        }, 2000);
    }).then((message) => {
        console.log('world');
        console.log(message);
    });
}
main2();
