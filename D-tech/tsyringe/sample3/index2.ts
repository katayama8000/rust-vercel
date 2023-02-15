import 'reflect-metadata';
import { container, inject, injectable } from 'tsyringe';

interface Animal {
  bow(): void;
  move(): void;
}

class Bear implements Animal {
  constructor() {}

  bow(): void {
    console.log('Bow.');
  }

  move(): void {
    console.log('Move.');
  }
}

@injectable()
class Zoo {
  // IBarをコンストラクタインジェクションする
  constructor(@inject('BEAR') private readonly bear: Bear) {}

  bow(): void {
    this.bear.bow();
  }

  move(): void {
    this.bear.move();
  }
}

// コンテナにクラスを登録
container.register('ZOO', {
  useClass: Zoo,
});

// コンテナにクラスを登録
container.register('BEAR', {
  useClass: Bear,
});

container.resolve<Zoo>('ZOO').bow();
