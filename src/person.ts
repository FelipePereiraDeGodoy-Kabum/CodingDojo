export type TPerson = {
  id: string,
  name: string,
  email: string
}

export class Person {
  private id: string;
  private name: string;
  private email: string;

  constructor(payload: TPerson) {
    this.id = payload.id;
    this.name = payload.name;
    this.email = payload.email;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setName(name: string): void {
    this.name = name;
  }
}