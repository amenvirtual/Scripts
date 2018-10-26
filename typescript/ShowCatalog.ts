import { Catalog } from "./Catalog";

export class ShowCatalog {
  private list: Catalog[];

  constructor(catalog: Catalog) {
    this.list = [catalog];
  }

  addToCatalog(...items: Catalog[]) {
    items.forEach(eachItem => {
      this.list.push(eachItem);
    });
  }

  printCatalog(shopName: string = "Med Buddy") {
    console.log(shopName);
    this.list.forEach(eachItem => {
      console.log(eachItem);
    });
  }
}
