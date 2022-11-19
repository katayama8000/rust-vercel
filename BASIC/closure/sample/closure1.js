console.log("closure1.js");

let count = 0;
function add() {
    count++;
}

add();
//countにどこからでも代入できる

function createCountUp() {
    let count = 0;
    function countUp() {
        count++;
        console.log(count);
    }
    return countUp;
}

const counter = createCountUp(1);
counter();
counter();

//クロージャー：特定の変数を特定の関数にしか使わせないためのもの

const PrivateInfo = () => {
    let importantNumber = 20001212
    return {
        getImportantNumber() {
            return importantNumber;
        },

        setImportantNumber(number) {
            importantNumber = number;
        }
    }
}

const privateInfo = PrivateInfo();
console.log(PrivateInfo.getImportantNumber());
privateInfo.setImportantNumber(20201230);
console.log(privateInfo.getImportantNumber());
