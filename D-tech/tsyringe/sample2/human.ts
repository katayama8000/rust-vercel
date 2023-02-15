import 'reflect-metadata';
import { container, inject, injectable } from 'tsyringe';

interface IHuman {
  greet(): void;
  introduce(): void;
}

class Human implements IHuman {
  constructor() {}

  greet(): void {
    console.log('Hello.');
  }

  introduce(): void {
    console.log('I am a human.');
  }
}

@injectable()
class Japanese {
  // IHumanをコンストラクタインジェクションする
  constructor(@inject('HUMAN') private readonly human: IHuman) {}

  greet(): void {
    this.human.greet();
  }

  introduce(): void {
    this.human.introduce();
  }
}

// コンテナにクラスを登録
container.register('HUMAN', {
  useClass: Human,
});

// コンテナにクラスを登録
container.register('JAPANESE', {
  useClass: Japanese,
});

// インスタンスを取得する
const japanese = container.resolve<Japanese>('JAPANESE').greet();

// test
// const human = container.resolve<Human>('HUMAN');
// human.greet();
// human.introduce();
