"use strict";
class Position {
    // private修飾子のついたプロパティは、Positionクラスから生まれたインスタンスのみで使用できる
    constructor(suji, dan) {
        this.suji = suji;
        this.dan = dan;
    }
    // パラメーターに渡された位置と現在の位置を比較するメソッド
    distanceFrom(position, player) {
        if (player === 'first') {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: Math.abs(Number(position.dan) - Number(this.dan)),
            };
        }
        else {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 段(縦の距離)は正負反転
            };
        }
    }
}
// Pieceは抽象クラス
class Piece {
    constructor(player, suji, dan) {
        this.player = player;
        this.position = new Position(suji, dan);
    }
    // パラメーターに渡された位置へ駒を移動するメソッド
    // publicなので、サブクラスでオーバーライド（上書き）できる
    moveTo(position) {
        this.position = position;
    }
}
// Pieceクラスを継承したOshoクラスを宣言
class Osho extends Piece {
    canMoveTo(position, player) {
        // 移動先に指定された位置(position)と現在の位置(this.position)を比較
        const distance = this.position.distanceFrom(position, player);
        // 移動先との距離が2未満、つまり1マス以内なら移動できる
        return distance.suji < 2 && distance.dan < 2;
    }
}
class Fu extends Piece {
    canMoveTo(position, player) {
        const distance = this.position.distanceFrom(position, player);
        // 移動先との距離が前方1マスであれば
        return distance.suji === 0 && distance.dan === 1;
    }
}
class NariKin extends Fu {
    canMoveTo(position, player) {
        const distance = this.position.distanceFrom(position, player);
        return (distance.suji < 2 &&
            distance.dan < 2 && // 移動先が1マス以内
            distance.suji !== 0 &&
            distance.dan === -1 // 左後方と右後方には進めない
        );
    }
}
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            new Osho('first', 5, '1'),
            new Osho('second', 5, '9'),
            // 先手の歩
            new Fu('first', 1, '3'),
            new Fu('first', 2, '3'),
            new Fu('first', 3, '3'),
            new Fu('first', 4, '3'),
            new Fu('first', 5, '3'),
            new Fu('first', 6, '3'),
            new Fu('first', 7, '3'),
            new Fu('first', 8, '3'),
            new Fu('first', 9, '3'),
            // 後手の歩
            new Fu('second', 1, '7'),
            new Fu('second', 2, '7'),
            new Fu('second', 3, '7'),
            new Fu('second', 4, '7'),
            new Fu('second', 5, '7'),
            new Fu('second', 6, '7'),
            new Fu('second', 7, '7'),
            new Fu('second', 8, '7'),
            new Fu('second', 9, '7'),
        ];
    }
}
new Game();
