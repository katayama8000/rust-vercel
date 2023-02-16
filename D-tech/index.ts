class FUser {
  constructor(
    private readonly _id: string,
    private _lastName: string,
    private _firstName: string
  ) {}

  get id() {
    return this._id;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}

const fUser = new FUser('1', 'テスト', '太郎');

console.log(FUser);
console.log(typeof FUser);
console.log(typeof fUser);
