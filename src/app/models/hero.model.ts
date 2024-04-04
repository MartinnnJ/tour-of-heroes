export default class Hero {
  constructor(
    public name: string,
    public popularity: number,
    public id: string = Math.random().toString().split('.')[1],
  ) {}
}