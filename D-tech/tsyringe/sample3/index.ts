import 'reflect-metadata';
import { container, injectable } from 'tsyringe';

@injectable()
class Human {
  constructor() {
    console.log('Human constructor');
  }

  public greet(): void {
    console.log('Hello.');
  }

  public introduce(): void {
    console.log('I am a human.');
  }
}

container.register('HUMAN', {
  useClass: Human,
});

const human = container.resolve<Human>('HUMAN');
human.greet();
human.introduce();
