export class Supplier {
  id: number;
  name?: string;

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