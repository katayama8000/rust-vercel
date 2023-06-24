class FUserClass {
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

const fUserClass = new FUserClass('1', 'テスト', '太郎');

console.log(FUserClass);
console.log(typeof FUserClass);
console.log(typeof fUserClass)
