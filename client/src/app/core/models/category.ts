export class Category {
  id: number;
  name?: string;

  // constructor(
  //   id: number,
  //   name?: string
  // ) {
  //   this.id = id;
  //   this.name = name;
  // }

  constructor() {
    
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}