import 'reflect-metadata';
import { container, inject, injectable } from 'tsyringe';

interface IBar {
  greet(): void;
}

class Bar implements IBar {
  constructor() {}

  greet(): void {
    console.log('Hello.');
  }
}

@injectable()
class Foo {
  // IBarをコンストラクタインジェクションする
  constructor(@inject('BAR') private readonly bar: IBar) {}

  greet(): void {
    this.bar.greet();
  }
}

// コンテナにクラスを登録
container.register('BAR', {
  useClass: Bar,
});

// コンテナにクラスを登録
container.register('FOO', {
  useClass: Foo,
});

// インスタンスを取得する
const foo = container.resolve<Foo>('FOO');
foo.greet();
