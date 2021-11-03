export class Restaurant {
  name: string;
  address: string;
  description: string;
  votes: number;

  constructor(
    name: string,
    address: string,
    description: string,
    votes?: number
  ) {
    this.name = name;
    this.address = address;
    this.description = description;
    this.votes = votes || 0;
  }

  public voteUp(): void {
    this.votes += 1;
  }

  public voteDown(): void {
    this.votes -= 1;
  }
}
