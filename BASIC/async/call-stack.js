// function foo() {
//     return foo()
// }

// foo()

// コールバック関数をアロー関数で定義
setTimeout(() => {
    console.log("[A] 並列的なタイマー");
}, 1000);
console.log("上のタイマー処理が終わっていないのにコンソールへ出力し、次のタイマーを起動");

setTimeout(() => {
    console.log("[B] 並列的なタイマー");
}, 1500);
console.log("上のタイマー処理が終わっていないのにコンソールへ出力し、次のタイマーを起動");

setTimeout(() => {
    console.log("[C] 並列的なタイマー");
}, 500);
console.log("上のタイマー処理が終わっていないのにコンソールへ出力");

console.log("タイマーを起動しているのにコンソールに出力ができてしまう");

console.log("[1]");


// [非同期 API] の起動(githubのAPIからデザイン思想について取得)
fetch("https://api.github.com/zen")
    .then((response) => { // [非同期に実行されるコールバック関数]
        // (取得したデータからtextを取得)
        return response.text();
    })
    .then((text) => { // [非同期に実行されるコールバック関数]
        // (textをコンソール出力)
        console.log("[3]", text);
        document.getElementById("output").textContent = text;
    });

console.log("[2]");

console.log("🦖 [1]");
// async 関数の即時実行(アロー関数での書き方)
(async () => {
    console.log("🐵 [2]");
    await 1;
    console.log("👻 [4]");
})();
// await 式があれば async 関数は完了せずにその外の処理が行われるので「非同期」の現象が起きている
console.log("🦕 [3]");