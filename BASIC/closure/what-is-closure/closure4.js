function taro() {
    // レキシカルス環境
    const parent_val = "太郎";
    // クロージャーとは、関数とその関数が定義されたレキシカルスコープの組み合わせ
    function saburo() {
        const saburo_val = "三郎";
        console.log(saburo_val);
        console.log(parent_val);
    }
    return saburo;
}

function jiro(v) {
    const parent_val = "次郎";
    v();
}

const taro_return = taro();

jiro(taro_return);

// レキシカルスコープ
// どこで実行されようと、関数が定義された時点でのスコープを参照する
// JSはレキシカルスコープ
// JSの関数の親とはうみの親のこと