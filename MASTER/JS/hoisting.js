// 変数の巻き上げ
// javascriptでは、関数のいかなる場所で宣言した変数も、内部的に、戦闘で宣言されたことになる
// 宣言部分だけが、関数の先頭に移動され、代入部分はそのままになる

var yourname = 'global';

function say() {
    console.log('君の名は' + yourname); // ① 君の名はundefined

    var yourname = 'local';
    console.log(yourname); // ② local
}

//上記のコードは、下記のように変換される

// var yourname = "global";

// function func() {
//     var yourname;

//     console.log(yourname);
//     yourname = "local";
//     console.log(yourname);
// }

say();

// 関数の巻き上げにメリットなどはない
// 関数で使用されるローカル変数は、関数の先頭で宣言する！