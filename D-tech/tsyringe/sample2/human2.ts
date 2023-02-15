export {};

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

class Japanese implements IHuman {
  private readonly human: IHuman;

  constructor(human: IHuman) {
    this.human = human;
  }

  greet(): void {
    this.human.greet();
  }

  introduce(): void {
    this.human.introduce();
  }
}

const japanese = new Japanese(new Human());
japanese.greet();
japanese.introduce();
