type Colors = 'red' | 'green' | 'blue';

type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
  //  ~~~~ タイポが検出される！
} satisfies Record<Colors, string | RGB>;

// どちらのメソッドも相変わらず使える！
const redComponent = palette.blue.at(0);
const greenNormalized = palette.green.toUpperCase();
