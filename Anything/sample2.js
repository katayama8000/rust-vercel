"use strict";
const palette = {
    red: [255, 0, 0],
    green: '#00ff00',
    blue: [0, 0, 255],
    //  ~~~~ タイポが検出される！
};
// どちらのメソッドも相変わらず使える！
const redComponent = palette.blue.at(0);
const greenNormalized = palette.green.toUpperCase();
